"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        // 星星和主角之间的距离小于这个数值时，就会完成收集
        pickRadius: 0
    },

    // use this for initialization
    onLoad: function onLoad() {},
    getPlayDistance: function getPlayDistance() {
        // 根据节点位置判断距离
        var playerPos = this.game.play.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    },
    onPicked: function onPicked() {
        // 当星星被收集时，调用GAME脚本中的接口，生成一个新星星
        this.game.spawnNewStar();
        // 然后销毁当前星星的节点
        this.node.destroy();
    },
    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        console.log(this);
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.getPlayerDistance() < this.pickRadius) {
            // 调用收集行为
            this.onPicked();
            return;
        }
    }
});