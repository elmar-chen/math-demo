/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    var states = [0];
    Array.prototype.upush = function(i){
        if(this.indexOf(i)<0){
            this.push(i);
        }
    }
    for(var i=0;i<s.length;i++){
        var nexts = [];
        for (let j = 0; j < states.length; j++) {
            const st = states[j];
            if(st==s.length)continue;
            var trans = p.charAt(st);
            switch(trans){
                case '*':
                    nexts.upush(st);
                    nexts.upush(Math.min(st+1, s.length));
                    break;
                case '?':
                    nexts.upush(Math.min(st+1, s.length));
                    break;
                default:
                    if(trans==s.charAt(i)){
                        nexts.upush(Math.min(st+1, s.length));
                    }
            }

        }
        states = nexts;
    }
    return states.indexOf(p.length)>=0;
};
console.log(isMatch("adceb",
"*a*b"))