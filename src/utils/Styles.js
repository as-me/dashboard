'use strict';

import appendVendorPrefix from './appendVendorPrefix';


class Styles {
    constructor() {

    }

    static menuWrap(isOpen) {
        return appendVendorPrefix({
            position: 'fixed',
            zIndex: 2,
            width: 200,
            height: '100%',
            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transition: 'all 0.5s',
            background: '#f4f4f4'
        });
    }

    static menu() {
        return appendVendorPrefix({
            height: '100%'
        });
    }
    static overlay(isOpen) {
        return appendVendorPrefix({
            position: 'fixed',
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.3)',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transition: isOpen ? 'opacity 0.5s' : 'opacity 0.5s, transform 0.1s 0.5s',
            zIndex: 1
        });
    }


    static pageWrap(isOpen, type) {
        var transform, overflow;
        if (type === 'scaleRotate') {
            transform = isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)';
        } else if (type === 'scaleDown') {
            transform = isOpen ? 'translate3d(0, 0, 1px)' : 'translate3d(0, 0, -300px)';
        }

        return appendVendorPrefix({
            transform: transform,
            transformStyle: 'preserve-3d',
            transition: 'all 0.5s',
            overflow: isOpen ? '' : 'hidden'
        });
    }

    static outerContainer(isOpen) {
        return appendVendorPrefix({
            perspective: '1500px',
            overflow: isOpen ? '' : 'hidden'
        });
    }
}




export default Styles;
