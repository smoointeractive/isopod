//
//  MainView.swift
//  DragAndPopulateImageGalleryData
//
//  Created by Sacha Moo on 5/3/17.
//  Copyright © 2017 Sacha Moo. All rights reserved.
//

import Cocoa

class MainView: NSView {

    var delegate: ImageProcessingDelegate?
    // Register the TIFF type like you did for URLs and created a subset to use next
    var nonURLTypes: Set<String> {return [String(kUTTypeTIFF)] }
    var acceptableTypes: Set<String> { return nonURLTypes.union([NSURLPboardType]) }
    
    enum Appearance {
        static let lineWidth: CGFloat = 10.0
    }
    
    override func awakeFromNib() {
        setup()
    }
    
    override func draw(_ dirtyRect: NSRect) {
        super.draw(dirtyRect)

        Swift.print("drawFocusRingMask")
        
        if isReceivingDrag {
            NSColor.selectedControlColor.set()
            
            let path = NSBezierPath(rect:bounds)
            path.lineWidth = Appearance.lineWidth
            path.stroke()
        }
    }
    
    
    
    func setup() {
        register(forDraggedTypes: Array(acceptableTypes))
    }
    
    //1. let is for constance and var is for variables -- create dictionary
    let filteringOptions = [NSPasteboardURLReadingContentsConformToTypesKey:NSImage.imageTypes()]
    
    // in java 'private boolean shouldAllowDrag(NSDraggingInfo draggingInfo)'
    func shouldAllowDrag(_ draggingInfo: NSDraggingInfo) -> Bool {
        var canAccept = false
        
        //2. got a reference to the dragging pasteboard from tne dragging session info
        let pasteBoard = draggingInfo.draggingPasteboard()
        
        //3. Ask pasteboard if it has any URLs and whether those URLs are referencs to
        //   images. If it has images, it accepts the drag. Otherwise, it rejects it.
        if pasteBoard.canReadObject(forClasses: [NSURL.self], options: filteringOptions) {
            canAccept = true;
            // Here you're checking if the nonURLTypes set contains any of the types received from the pasteboard
            // and if that's the case, accepts the drag operation. Since you added a TIFF type to that
            // set, the view accepts TIFF data from the pasteboard
        }else if let types = pasteBoard.types, nonURLTypes.intersection(types).count > 0 {
            canAccept = true;
        }
        return canAccept
    }
    
    //1. Create a property named isReceivingDrag to track when the dragging session
    //   is inside the view and has data that you want . It triggers a redraw on the
    //   view each time it is set.
    var isReceivingDrag = false {
        didSet {
            needsDisplay = true
        }
    }
    
    //2. Overrides the draggingEntered(_:), and decides if it accepts the drag operation.
    override func draggingEntered(_ sender: NSDraggingInfo) -> NSDragOperation {
        
        Swift.print("draggingEntered")
        let allow = shouldAllowDrag(sender)
        isReceivingDrag = allow
        return allow ? .copy : NSDragOperation()
    }
    // override draggintExitd(_:) and set the isReceivingDrag variable to false
    override func draggingExited(_ sender: NSDraggingInfo?) {
        
        Swift.print("draggingExited")
        isReceivingDrag = false;
    }
    
//    override func drawFocusRingMask() {
//        Swift.print("drawFocusRingMask")
//        
//        if isReceivingDrag {
//            NSColor.selectedControlColor.set()
//            
//            let path = NSBezierPath(rect:bounds)
//            path.lineWidth = Appearance.lineWidth
//            path.stroke()
//        }
//    }
    
//    override func draw(_ dirtyRect: NSRect) {
//        // This code draws a system-colored border when a valid drag enters the view
//        // Aside from looking sharp, it makes your app consisten with the rest of the
//        // system by providing a visual when it accepts a dragged item.
//        if isReceivingDrag {
//            NSColor.selectedControlColor.set()
//            
//            let path = NSBezierPath(rect:bounds)
//            path.lineWidth = Appearance.lineWidth
//            path.stroke()
//        }
//    }
    
    //we override hitTest so that this view which sits at the top of the view hierachy
    //appears transparent to mouse clicks
    override func hitTest(_ aPoint: NSPoint) -> NSView? {
        return nil
    }
    
    // The system calls the below method when you release the mouse inside the view; it's
    // the last chance to reject or accept the drag. Returning false will reject it,
    // cuausing the dragged image to slide back to its origination. Returning true means the
    // view accepts the image. When accepted, the system removes the dragged image and
    // invokes the next method in the protocol sequence.
    override func prepareForDragOperation(_ sender: NSDraggingInfo) -> Bool {
        Swift.print("prepareForDragOperation")
        let allow = shouldAllowDrag(sender)
        return allow
    }
    
    override func performDragOperation(_ draggingInfo: NSDraggingInfo) -> Bool {
        Swift.print("performDragOperation")
        //1. Reset isReceivingDrag flag to false.
        isReceivingDrag = false
        let pasteBoard = draggingInfo.draggingPasteboard()
        
        //2. Convert the window-based coordinate to a view-relative coordinate
        let point = convert(draggingInfo.draggingLocation(), from: nil)
        
        //3. Hand off any image URLS to the delegate for processing, and return true -- else you reject
        //   the drag operation returning false
        if let urls = pasteBoard.readObjects(forClasses: [NSURL.self], options:filteringOptions) as? [URL],
            urls.count > 0 {
            delegate?.processImageURLs(urls, center: point)
            return true
        } //else if let image = NSImage(pasteboard: pasteBoard) {
//            delegate?.processImage(image, center: point)
        //}
        return false
    }
}
