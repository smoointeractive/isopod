//
//  AppDelegate.swift
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/2/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

import Cocoa

@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {



    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Insert code here to initialize your application
//        DatabaseUtility.configureMySQL()
//        initializeData()
    }

    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
        
        if DatabaseUtility.isDatabaseConnected != false {
        DatabaseUtility.closeMySQLConnection() // figure out how to put a check to guarantee that mysql is valid and connected before we make a call to disconnect
        }
    }


}

