//
//  Record.swift
//  NotFun
//
//  Created by Sacha Moo on 5/2/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

import Foundation
import OHMySQL

class Record: NSObject, OHMappingProtocol {
    
    var recordId: NSNumber?
    var recordName: String?
    var recordDescription: String?
//    var recordThumbnail: NSMutableArray?
//    var recordThumbnail: Data?
    var recordThumbnail: String?
    var recordImageUrl: String?
    
    func mappingDictionary() -> [AnyHashable : Any]! {
        return ["recordId": "id",
                "recordName": "name",
                "recordDescription": "description",
                "recordThumbnail": "thumbnail",
                "recordImageUrl": "imageurl"]
    }
    
    func mySQLTable() -> String! {
        return "imagegallerydb"
    }
    
    func primaryKey() -> String! {
        return "recordId"
    }
}
