//
//  ImageProcessingDelegate.swift
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/3/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

import Foundation
import Cocoa


protocol ImageProcessingDelegate {
    func processImageURLs(_ urls: [URL], center: NSPoint)
}
