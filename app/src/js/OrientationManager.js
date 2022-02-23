"use strict";
class OrientationManager {
    constructor() {
        this.support = false;
        this.granted = false;
    }
    ;
    static instance() {
        if (this.inst == null) {
            this.inst = new OrientationManager();
        }
        return this.inst;
    }
    ;
    startListening(handleEvent) {
        window.addEventListener("deviceorientation", (event) => {
            console.log("orientationEvent");
            var rotateDegrees = event.alpha;
            var leftToRight = event.gamma;
            var frontToBack = event.beta;
            handleEvent(frontToBack, leftToRight, rotateDegrees);
        });
    }
    stopListening() {
        window.removeEventListener("deviceorientation", function (event) { });
    }
    ;
    askPermission(callback) {
        if (window.DeviceOrientationEvent == null) {
            this.support = false;
            console.log("case: no support");
            callback(new Error("DeviceOrientation is not supported."));
        }
        else if (typeof DeviceOrientationEvent.requestPermission === "function") {
            var requestPermission = DeviceOrientationEvent.requestPermission;
            this.support = true;
            requestPermission().then((state) => {
                if (state == "granted") {
                    console.log("case: permission granted");
                    this.granted = true;
                    callback(null);
                }
                else {
                    console.log("case: permission denied");
                    this.granted = false;
                    callback(new Error("Permission denied by user"));
                }
            }, function (e) {
                // TODO: Fehlermeldung
                console.log("case: permission error");
                callback(e);
            });
        }
        else {
            console.log("case: permission special");
            this.granted = true;
            callback(null);
        }
    }
}
OrientationManager.inst = null;
//# sourceMappingURL=OrientationManager.js.map