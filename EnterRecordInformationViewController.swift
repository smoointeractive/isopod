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
        
//        RecordsProvider().insertNewRecord()
        dismiss(self)
    }
}
