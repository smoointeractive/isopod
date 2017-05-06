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
//    static var databaseConfig: dbConfiguration = dbConfiguration()
//    static var databaseConfig: databaseConfiguration = databaseConfiguration.init(host: convertStringToUnsafePointerInt8("localhost"),
//                                                                                  user: convertStringToUnsafePointerInt8("root"),
//                                                                                  password: convertStringToUnsafePointerInt8("OB?A1a&-KGw1"),
//                                                                                  database: convertStringToUnsafePointerInt8("imagedb"),
//                                                                                  port: 3306,
//                                                                                  unix_socket: convertStringToUnsafePointerInt8("/tmp/mysql.sock"),
//                                                                                  client_flag: 0)
    
    
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
    
    static func initializeDatabaseConfiguration()
    {
//        databaseConfig.host = convertStringToUnsafePointerInt8("localhost")
//        databaseConfig.user = convertStringToUnsafePointerInt8("root")
//        databaseConfig.password = convertStringToUnsafePointerInt8("OB?A1a&-KGw1")
//        databaseConfig.database = convertStringToUnsafePointerInt8("imagedb")
//        databaseConfig.port = 3306
//        databaseConfig.unix_socket = convertStringToUnsafePointerInt8("/tmp/mysql.sock")
//        databaseConfig.client_flag = 0
    }
    
    // call mysql c library to insert binary file into table
//    static func insertImageIntoTable( data: UnsafeMutablePointer<queryData>) {
//        createBinaryFileQuery(data)
//    }
  /*  static func insertImageIntoTable(  databaseConfig: UnsafeMutablePointer<dbConfiguration>,
                                       queryData: UnsafeMutablePointer<tableQueryData>)
    {
//        createBinaryFileQuery(databaseConfig, queryData)
//        createBinaryFileQuery()
    } */
    
    
    // Spike investigation: use c code to attempt to successfully load binary image into mysql db table
    
    static func executeCImageBinarySpike()
    {
//        testDBQuery()
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
    
    static func convertStringToUnsafePointerInt8(_ string: String) -> UnsafePointer<Int8>{
        let cStringValue = string//.cString(using: .utf8)
        let processedString: String = NSString(bytes: cStringValue,
                                               length: Int(string.characters.count),
                                               encoding:String.Encoding.ascii.rawValue)! as String
        let pointer = UnsafePointer<Int8>(processedString)
        
        
        return pointer
    }
    
    static func handleSwiftToCString( swiftString: String) -> UnsafePointer<Int8>{
        var result: UnsafePointer<Int8>? = nil
        swiftString.withCString {(ptr: UnsafePointer<Int8>) -> Void in
            result = ptr
        }
        
        return result!
    }
}
