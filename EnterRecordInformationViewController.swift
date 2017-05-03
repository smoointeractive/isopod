//
//  EnterRecordInformationViewController.swift
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/3/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

import Cocoa

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
        dismiss(self)
    }
    
    @IBAction func submitButtonAction(_ sender: Any) {
    }
    
    
    
}
