@objc(TestSubscription2)
class TestSubscription2: RCTEventEmitter {

  public static var emitter: RCTEventEmitter!

  override init() {
    super.init()

    TestSubscription2.emitter = self
  }

  open override func supportedEvents() -> [String] {
    ["eventExample"]
  }

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    TestSubscription2.emitter.sendEvent(withName: "eventExample", body: ["status": "An event has been sent from iOS"])
    
    resolve(a*b)
  }
}
