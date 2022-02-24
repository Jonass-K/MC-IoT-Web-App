export class OrientationManager {

    static inst: OrientationManager | null = null;

    support: Boolean = false;
    granted: Boolean = false;

    private constructor() {};


    static instance(): OrientationManager {
        if (this.inst == null) {
            this.inst = new OrientationManager();
        }
        return this.inst;
    };

    startListening(handleEvent: (frontToback: number, leftToRight: number, rotateDegrees: number) => void) {
        window.addEventListener("deviceorientation", (event: { alpha: any; gamma: any; beta: any; }) => {
                console.log("orientationEvent");
                
                var rotateDegrees = event.alpha;
                var leftToRight = event.gamma;
                var frontToBack = event.beta;
        
                handleEvent(frontToBack, leftToRight, rotateDegrees);
        });
    }

    stopListening() {
        window.removeEventListener("deviceorientation", function (event: { alpha: any; gamma: any; beta: any; }) {});
    };

    askPermission(callback: (a: Error | null) => void) {
        if (window.DeviceOrientationEvent == null) {
            this.support = false;
            console.log("case: no support");
            callback(new Error("DeviceOrientation is not supported."));

        } else if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
            var requestPermission: Function = (DeviceOrientationEvent as any).requestPermission

            this.support = true

            requestPermission().then( (state: string) => {
                if (state == "granted") {
                    console.log("case: permission granted");
                    
                    this.granted = true;
                    callback(null);
                } else {
                    console.log("case: permission denied");

                    this.granted = false;
                    callback(new Error("Permission denied by user"));
                }
            }, function (e: Error) {
                // TODO: Fehlermeldung
    
                console.log("case: permission error");
                callback(e);
            });
        } else {
            console.log("case: permission special");
            this.granted = true;
            callback(null);
        }
    }

}