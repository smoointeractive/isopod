//
//  EnterRecordInformationViewController.swift
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/3/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

import Cocoa
import OHMySQL

class EnterRecordInformationViewController: NSViewController {

    var recordFieldData: RecordData?;
    
    @IBOutlet weak var nameField: NSTextField!
    @IBOutlet weak var descriptionField: NSTextField!
    @IBOutlet weak var imageUrlField: NSTextField!
    @IBOutlet weak var thumbnailImage: NSImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do view setup here.
        
        nameField.stringValue = (recordFieldData?.name)!
        descriptionField.stringValue = (recordFieldData?.description)!
        imageUrlField.stringValue = (recordFieldData?.imageurl)!
        thumbnailImage.image = (recordFieldData?.thumbnail)!
    }
    
    @IBAction func cancelButtonAction(_ sender: Any) {
        print("cancel button clicked")
        dismiss(self)
    }
    
    @IBAction func submitButtonAction(_ sender: Any) {
       print("submit button clicked")
/*
        let recordData = Record()
        recordData.recordName = nameField.stringValue
        recordData.recordDescription = descriptionField.stringValue
        recordData.recordImageUrl = imageUrlField.stringValue
//        recordData.recordThumbnail = DatabaseUtility.convertNSImageToByteArray(imageUrlField.stringValue)
//        recordData.recordThumbnail = DatabaseUtility.convertNSImageToJpgData(thumbnailImage.image!)
        recordData.recordThumbnail = DatabaseUtility.convertNSImageToBase64String(imageUrlField.stringValue)
        
        DatabaseUtility.configureMySQL()
        RecordsProvider().insertNewRecord(recordData)
        DatabaseUtility.closeMySQLConnection()
        
//        RecordsProvider().insertNewRecord()*/
        
        //test
//        DatabaseUtility.executeCImageBinarySpike()
//        DatabaseUtility.initializeDatabaseConfiguration()
//        let host: String = "localhost"
//        let user: String = "root"
//        let password: String = "OB?A1a&-KGw1"
//        let database: String = "imagedb"
//        let socket: String = "/tmp/mysql.sock"
//
//        var config: dbConfiguration = dbConfiguration()
//        config.host = DatabaseUtility.convertStringToUnsafePointerInt8(host)
//        config.user = DatabaseUtility.convertStringToUnsafePointerInt8(user)
//        config.password = DatabaseUtility.convertStringToUnsafePointerInt8(password)
//        config.database = DatabaseUtility.convertStringToUnsafePointerInt8(database)
//        config.port = 3306
//        config.unix_socket = DatabaseUtility.convertStringToUnsafePointerInt8(socket)
//        config.client_flag = 0
//                
//        var recordDataCStruct: tableQueryData = tableQueryData();
//        recordDataCStruct.id = 0
//        recordDataCStruct.name = DatabaseUtility.convertStringToUnsafePointerInt8(nameField.stringValue)
//        recordDataCStruct.description = DatabaseUtility.convertStringToUnsafePointerInt8(descriptionField.stringValue)
//        recordDataCStruct.thumbnail_path = DatabaseUtility.convertStringToUnsafePointerInt8(imageUrlField.stringValue)
//        recordDataCStruct.imageurl = DatabaseUtility.convertStringToUnsafePointerInt8(imageUrlField.stringValue)
        
//        
//        DatabaseUtility.insertImageIntoTable(databaseConfig: &config,
//                                             queryData: &recordDataCStruct)

//        set_database_configuration(DatabaseUtility.convertStringToUnsafePointerInt8(host),
//                                   DatabaseUtility.convertStringToUnsafePointerInt8(user),
//                                   DatabaseUtility.convertStringToUnsafePointerInt8(password),
//                                   DatabaseUtility.convertStringToUnsafePointerInt8(database),
//                                   3306,
//                                   DatabaseUtility.convertStringToUnsafePointerInt8(socket),
//                                   0)
//        
//        set_table_query_data(0,
//                             DatabaseUtility.convertStringToUnsafePointerInt8(nameField.stringValue),
//                             DatabaseUtility.convertStringToUnsafePointerInt8(descriptionField.stringValue),
//                             DatabaseUtility.convertStringToUnsafePointerInt8(imageUrlField.stringValue),
//                             DatabaseUtility.convertStringToUnsafePointerInt8(imageUrlField.stringValue))
//        createBinaryFileQuery()
        

        set_table_query_data(0,
                             UnsafeMutablePointer<Int8>(mutating: nameField.stringValue),
                             UnsafeMutablePointer<Int8>(mutating: descriptionField.stringValue),
                             UnsafeMutablePointer<Int8>(mutating: imageUrlField.stringValue),
                             UnsafeMutablePointer<Int8>(mutating: imageUrlField.stringValue))
        
        createBinaryFileQuery("localhost",
                              "root",
                              "OB?A1a&-KGw1",
                              "imagedb",
                              3306,
                              "/tmp/mysql.sock",
                              0)

        dismiss(self)
    }
    
    func commitTableQueryAsync(_ message: String, completion: (_ result: String) -> Void) {
        
        completion(message)
    }
    
}
