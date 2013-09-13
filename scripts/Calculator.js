var Calculator = {
    sum: function (a, b) {
        "use strict";
        return a + b;
    },

    divide: function (a, b) {
        "use strict";
        if (b === 0) {
            return 0;
        }
        return a / b;
    },

    multiply: function (a, b) {
        "use strict";
        return a * b;
    },

    subtract: function (a, b) {
        "use strict";
        return a - b;
    }
};