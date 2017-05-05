//
//  DatabaseUtility.swift
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/3/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

import Foundation
import OHMySQL


class DatabaseUtility {
    static var storedOhMySQLCoordinator: OHMySQLStoreCoordinator?
    static var isDatabaseConnected: Bool = false
    
    static func configureMySQL() {
        let user = OHMySQLUser(userName: "root",
                           password: "OB?A1a&-KGw1",
                           serverName: "localhost",
                           dbName: "imagedb",
                           port: 3306,
                           socket: "/tmp/mysql.sock")
        let coordinator = OHMySQLStoreCoordinator(user: user!)
        coordinator.encoding = .UTF8MB4
        coordinator.connect()
        
        //database connection status flag
        isDatabaseConnected = coordinator.isConnected
    
        let context = OHMySQLQueryContext()
        context.storeCoordinator = coordinator
        OHMySQLContainer.shared().mainQueryContext = context
        
        storedOhMySQLCoordinator = context.storeCoordinator
    }
    
    static func closeMySQLConnection()
    {
        let mysql = storedOhMySQLCoordinator
        
        mysql?.disconnect()
        
        isDatabaseConnected = (mysql?.isConnected)!
    }
    
    // Spike investigation: use c code to attempt to successfully load binary image into mysql db table
    
    static func executeCImageBinarySpike()
    {
        testDBQuery()
//        save_binary_file()
        /*let s = "/Users/sachamoo/temp/Pictures/Art/ideas/characters/sc00a012a3.jpg"//Bundle.main.bundlePath
        let cs = (s as NSString).utf8String
        let buffer = UnsafeMutablePointer<Int8>(mutating: cs)
        ReadFile(buffer)*/
    }
    
    // Converters
        
    static func convertNSImageToBase64String(_ imageUrl: String) -> String{
        // 1. Get NSData
        //      - get url
        //      - get NSData
        let url:NSURL = NSURL(string: imageUrl)!
        let imageData:NSData = try! NSData.init(contentsOf: url as URL)
        
        // 2. Encode data
        let base64String: String =
            imageData.base64EncodedString(options: NSData.Base64EncodingOptions(rawValue: 0))
        
        return base64String
    }
    
    static func convertNSImageToByteArray(_ imageUrl: String) -> NSMutableArray
    {
        // 1. Get NSData
        //      - get url
        //      - get NSData
        let url:NSURL = NSURL(string: imageUrl)!
        let imageData:NSData = try! NSData.init(contentsOf: url as URL)
        
        // the number of elements:
        let count = imageData.length / MemoryLayout<UInt8>.size
    
        // create array of appropriate length:
        var bytes = [UInt8](repeating: 0, count: count)
    
        // copy bytes into array
        imageData.getBytes(&bytes, length:count * MemoryLayout<UInt8>.size)
    
        let byteArray:NSMutableArray = NSMutableArray()
    
        for i in (0 ..< count) {
            byteArray.add(NSNumber(value: bytes[i]))
        }
    
        return byteArray
    }
    
    static func convertNSImageToJpgData(_ image: NSImage) -> Data{
//        let size = CGSize(width: image.size.width / 2, height: image.size.height / 2)
        
        
        let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil)!
        let bitmapRep = NSBitmapImageRep(cgImage: cgImage)
        let jpegData = bitmapRep.representation(using: NSBitmapImageFileType.JPEG, properties: [:])!.base64EncodedData()
        
        return jpegData
    }
}
