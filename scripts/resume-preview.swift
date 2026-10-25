// Renders page 1 of the résumé PDF to a PNG for the site's résumé preview,
// so visitors never see a browser PDF viewer's toolbar.
// Usage: swift scripts/resume-preview.swift <input.pdf> <output.png> [scale]
// macOS only (uses PDFKit). Run `npm run resume:preview` after updating the PDF.
import AppKit
import Foundation
import PDFKit

let args = CommandLine.arguments
guard args.count >= 3 else {
    FileHandle.standardError.write("usage: resume-preview.swift <input.pdf> <output.png> [scale]\n".data(using: .utf8)!)
    exit(1)
}
let scale = args.count > 3 ? (Double(args[3]) ?? 2) : 2

guard let doc = PDFDocument(url: URL(fileURLWithPath: args[1])), let page = doc.page(at: 0) else {
    FileHandle.standardError.write("could not open \(args[1])\n".data(using: .utf8)!)
    exit(1)
}

let bounds = page.bounds(for: .mediaBox)
let width = Int(bounds.width * scale)
let height = Int(bounds.height * scale)

guard let rep = NSBitmapImageRep(
    bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height,
    bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
    colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0
), let ctx = NSGraphicsContext(bitmapImageRep: rep) else {
    FileHandle.standardError.write("could not create bitmap\n".data(using: .utf8)!)
    exit(1)
}

let cg = ctx.cgContext
cg.setFillColor(NSColor.white.cgColor)
cg.fill(CGRect(x: 0, y: 0, width: width, height: height))
cg.scaleBy(x: scale, y: scale)
page.draw(with: .mediaBox, to: cg)

guard let png = rep.representation(using: .png, properties: [:]) else {
    FileHandle.standardError.write("could not encode PNG\n".data(using: .utf8)!)
    exit(1)
}
try png.write(to: URL(fileURLWithPath: args[2]))
print("wrote \(args[2]) (\(width)x\(height))")
