'use strict';

module.exports = function classtr(cls) {
    return cls.filter(Boolean).join(' ');
}
