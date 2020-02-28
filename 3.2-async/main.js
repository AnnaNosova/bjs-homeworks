'use strict'

class  AlarmClock {

    constructor () {
        this.alarms = [];
        this.id = '';
    }

    addClock (time, callbackFn, id) {
        if (id === undefined) {
            throw new Error('alarm id is null or not defined');
            //console.error());
            //break;  
        }

        if (this.alarms.includes(id)) {
            throw new Error(`alarm ${id} does not exist`);
            //console.error());
            //break;
        }

        this.alarms.push(
        {
            id: id,
            callbackFn: callbackFn,
            time: time,
        }); 
    
    }

    removeClock (id) {
        let finder = this.alarms.filter(item => item.id != id);
        if (finder.length != this.alarms.length) {
            this.alarms = Array.from(finder);
            return `alarm ${id} was successfully deleted`
        } else {
            throw new Error(`alarm ${id} does not exist`);
        }

    }

    formatTime (time) {
        let hours = time.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        let minutes = time.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        //console.log(`${hours}:${minutes}`);

        return `${hours}:${minutes}`;
    }

    getCurrentFormattedTime () {
        let now = new Date();
        //console.log(AlarmClock.formatTime(now));
        return AlarmClock.formatTime(now);
    }

    start () {
        function checkClock (AlarmClock) {
            if (getCurrentFormattedTime() === this.alarms[time]) {
                alarms.callback(alarm);
            }
        }

        
        
        
    }

}

/*function getCurrentFormattedTime () {
    let now = new Date();
    return formatTime(now);
}


function formatTime (t) {
    let hours = t.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minutes = t.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return `${hours}:${minutes}`;
}

let d = getCurrentFormattedTime();

formatTime(d);*/

