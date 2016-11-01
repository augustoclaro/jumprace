jumprace.module("startScreenModule", [
    "$sprite", "$renderer", "$imageLoader",
    function ($sprite, $renderer, $imageLoader) {
        return function () {
            var _wpSprite, _logoSprite;
            const _logoSize = {
                width: 400
            };
            this.load = function (next) {
                $imageLoader.loadImages({
                    wallpaper: "img/sprites/wallpaper.jpg",
                    logo: "img/sprites/logo.png"
                }, function (images) {
                    _wpSprite = $sprite.create(images.wallpaper, {
                        height: images.wallpaper.height,
                        width: images.wallpaper.width,
                        sprites: [
                            { name: "wallpaper", x: 0, y: 0 }
                        ]
                    });
                    _logoSprite = $sprite.create(images.logo, {
                        height: images.logo.height,
                        width: images.logo.width,
                        sprites: [
                            { name: "logo", x: 0, y: 0 }
                        ]
                    });
                    _logoSize.height = images.logo.height / images.logo.width * _logoSize.width;
                    next();
                });
            };
            this.update = function () {
            };
            this.render = function () {
                const render = $renderer.fromLayer(0);
                render.renderSprite(_wpSprite, "wallpaper");
                render.renderSprite(_logoSprite, "logo", {
                    x: 200,
                    y: 20    
                }, _logoSize);
                render.renderText("Start", {
                    font: "bold 70px Verdana",
                    align: "center",
                    color: "white",
                    pos: {
                        x: 400,
                        y: 200
                    }
                });
                render.renderLine({
                    x: 300,
                    y: 220
                }, {
                    x: 500,
                    y: 220
                }, 5, "white");
                render.renderText("Use space bar to jump", {
                    maxWidth: 300,
                    font: "bold 30px Verdana",
                    align: "center",
                    color: "white",
                    pos: {
                        x: 400,
                        y: 290
                    }
                });
            };
        };
    }]);