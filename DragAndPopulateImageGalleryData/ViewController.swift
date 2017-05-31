//
//  ViewController.swift
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/2/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

import Cocoa


class ViewController: NSViewController {
    
    @IBOutlet var mainView: MainView!
    @IBOutlet weak var statusLabel: NSTextField!
    @IBOutlet weak var dragDropImage: NSImageView!
    var segueData: RecordData?
    
    enum Appearance {
        static let maxStickerDimension: CGFloat = 150.0
        static let shadowOpacity: Float =  0.4
        static let shadowOffset: CGFloat = 4
        static let imageCompressionFactor = 1.0
        static let maxRotation: UInt32 = 12
        static let rotationOffset: CGFloat = 6
        static let randomNoise: UInt32 = 200
        static let numStars = 20
        static let maxStarSize: CGFloat = 30
        static let randonStarSizeChange: UInt32 = 25
        static let randomNoiseStar: UInt32 = 100
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        mainView.delegate = self
        dragDropImage.unregisterDraggedTypes()
//        DatabaseUtility.configureMySQL()
    }
    
    
    
    func configureShadow(_ view: NSView) {
        if let layer = view.layer {
            layer.shadowColor = NSColor.black.cgColor
            layer.shadowOpacity = Appearance.shadowOpacity
            layer.shadowOffset = CGSize(width: Appearance.shadowOffset, height: -Appearance.shadowOffset)
            layer.masksToBounds = false
        }
    }
    
    override func prepare(for segue: NSStoryboardSegue, sender: Any?) {
        
        let data = segueData;
        
        let destinationViewController = segue.destinationController as? EnterRecordInformationViewController
        destinationViewController?.recordFieldData = data
    }
}

// MARK: - ImageProcessingDelegate
extension ViewController: ImageProcessingDelegate {
    
    func processImageURLs(_ urls: [URL], center: NSPoint) {
        for (_,url) in urls.enumerated() {
            print("ViewController: processImageURLs")
            // remove the macos 'file://' prefix from url string'
            let processedImageUrl: String = url.absoluteString.components(separatedBy: "file://")[1]
            // 1. Creating an image with the contents from the URLs
            if let image = NSImage(contentsOf:url) {
                segueData = RecordData(name: "default",
                                       description: "default",
                                       thumbnail: image,
                                       imageurl: processedImageUrl)
                
                performSegue(withIdentifier: "EnterRecordSegue", sender: self)
            }
        }
    }
}

