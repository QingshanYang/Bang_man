(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/enemy-generator.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a42f7ruQo9L2IDUj9rBkf/I', 'enemy-generator', __filename);
// script/enemy-generator.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        //enemyPrefab: cc.Prefab,
        enemyPrefabArray: [cc.Prefab],
        time: 10,
        num: 1,
        _currentTime: 1,
        ground: cc.Node,
        _sceneLoading: false
    },

    onLoad: function onLoad() {
        window.enemyNum = 0;
        //this.generator();
        this.schedule(this.generator.bind(this), 1);
    },

    generator: function generator() {
        if (window.enemyNum == 0) {
            if (this._currentTime == this.time) {
                if (!this._sceneLoading) {
                    this._sceneLoading = true;
                    cc.director.loadScene('win-scene');
                    return;
                }
            }
            var enemyNum = this.num * this._currentTime;
            for (var i = 0; i < enemyNum; i++) {
                var enemyIdx = Math.floor(Math.random() * this.enemyPrefabArray.length);
                var enemy = cc.instantiate(this.enemyPrefabArray[enemyIdx]);
                var randomPosition = null;
                if (Math.random() > 0.5) {
                    randomPosition = cc.v2(Math.round(cc.random0To1() * 960), cc.random0To1() * 640);
                } else {
                    randomPosition = cc.v2(cc.random0To1() * 960, Math.round(cc.random0To1()) * 640);
                }
                this.ground.addChild(enemy);
                enemy.name = 'enemy' + Date.now();
                enemy.position = randomPosition;
                window.enemyNum++;
            }
            this._currentTime++;
        }
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=enemy-generator.js.map
        