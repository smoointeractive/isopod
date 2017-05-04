//
//  RecordsProvider.swift
//  NotFun
//
//  Created by Sacha Moo on 5/2/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

import Foundation
import OHMySQL

class RecordsProvider {
    
    func loadRecords(_ completion: @escaping ([Record]) -> ()) {
        let query = OHMySQLQueryRequestFactory.select("imagegallerydb", condition: nil)
        let response = try? OHMySQLContainer.shared().mainQueryContext?.executeQueryRequestAndFetchResult(query)
        
        // if response == nil go pass an empty array to the 'completion' closure a.k.a lambda
        guard let responseObject = response else {
            completion([])
            return
        }
        
        var records = [Record]()
        for recordResponse in responseObject! {
            let record = Record()
            record.map(fromResponse: recordResponse)
            records.append(record)
        }
        
        completion(records)
    }
    
    // insert new record into database
    func insertNewRecord() {
        let record = Record()
        record.recordName = "Locutus"
        record.recordDescription = "OHMySQL really works!!!"
        record.recordImageUrl = "arbitraryImage.png"
//        record.recordThumbnail = NSMutableArray()//"base64 image string goes here"
        record.recordThumbnail = Data()//"base64 image string goes here"

        OHMySQLContainer.shared().mainQueryContext?.insertObject(record)
        try? OHMySQLContainer.shared().mainQueryContext?.save()
    }
    
    func insertNewRecord(_ record: Record) {
        let entry = record
        
        OHMySQLContainer.shared().mainQueryContext?.insertObject(entry)
        try? OHMySQLContainer.shared().mainQueryContext?.save()
    }
}
