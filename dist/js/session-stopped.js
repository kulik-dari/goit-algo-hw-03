"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "eventCliSessionStopped", {
    enumerable: true,
    get: function() {
        return eventCliSessionStopped;
    }
});
const EVENT_VERSION = "NEXT_CLI_SESSION_STOPPED";
function eventCliSessionStopped(event) {
    // This should be an invariant, if it fails our build tooling is broken.
    if (typeof "13.5.1" !== "string") {
        return [];
    }
    const payload = {
        nextVersion: "13.5.1",
        nodeVersion: process.version,
        cliCommand: event.cliCommand,
        durationMilliseconds: event.durationMilliseconds,
        ...typeof event.turboFlag !== "undefined" ? {
            turboFlag: !!event.turboFlag
        } : {},
        pagesDir: event.pagesDir,
        appDir: event.appDir
    };
    return [
        {
            eventName: EVENT_VERSION,
            payload
        }
    ];
}

//# sourceMappingURL=session-stopped.js.map