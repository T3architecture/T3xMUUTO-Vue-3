(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"minWidth":20,"borderRadius":0,"class":"Player","backgroundColorDirection":"vertical","gap":10,"vrPolyfillScale":1,"width":"100%","mediaActivationMode":"window","backgroundColorRatios":[0],"id":"rootPlayer","backgroundOpacity":1,"horizontalAlign":"left","paddingTop":0,"paddingBottom":0,"paddingLeft":0,"buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","definitions": [{"minWidth":250,"class":"Label","data":{"name":"Label28174"},"width":250,"textDecoration":"none","paddingTop":0,"id":"label4056","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"fontFamily":"Arial","paddingRight":0,"text":trans('label4056.text'),"propagateClick":false,"top":17,"fontColor":"#FFFFFF","verticalAlign":"middle","toolTipHorizontalAlign":"center","height":50,"maxHeight":50,"fontSize":30,"maxWidth":250,"fontStyle":"normal","borderRadius":0,"borderSize":0,"shadow":false,"fontWeight":"bold","minHeight":50,"right":"0.47%"},{"class":"PanoramaCamera","hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E_camera"},{"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"shadow":false,"class":"ViewerArea","playbackBarHeadOpacity":1,"displayTooltipInSurfaceSelection":true,"toolTipFontFamily":"Arial","playbackBarBorderSize":2,"toolTipShadowBlurRadius":3,"playbackBarBorderRadius":4,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","vrPointerColor":"#FFFFFF","id":"MainViewer","subtitlesHorizontalAlign":"center","subtitlesVerticalAlign":"bottom","toolTipShadowOpacity":1,"paddingLeft":0,"data":{"name":"Main Viewer"},"subtitlesEnabled":true,"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0,1],"toolTipBorderRadius":3,"paddingRight":0,"toolTipBackgroundColor":"#999999","progressRight":10,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipFontSize":12,"playbackBarHeadShadow":true,"subtitlesPaddingLeft":5,"toolTipTextShadowColor":"#666666","progressBarBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"progressOpacity":1,"transitionMode":"blending","toolTipBorderColor":"#767676","playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColorRatios":[0,1],"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBottom":10,"toolTipHorizontalAlign":"center","playbackBarHeadShadowVerticalLength":0,"translationTransitionDuration":1000,"playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarProgressBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"progressBorderColor":"#AAAAAA","subtitlesPaddingRight":5,"subtitlesTop":0,"progressBarBackgroundColor":["#222222","#444444"],"subtitlesBottom":50,"progressBackgroundOpacity":1,"playbackBarHeadHeight":30,"subtitlesShadow":false,"toolTipPaddingLeft":6,"toolTipShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"subtitlesPaddingTop":5,"subtitlesPaddingBottom":5,"doubleClickAction":"toggle_fullscreen","progressBarOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowColor":"#000000","minWidth":100,"borderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBottom":1,"progressHeight":20,"minHeight":50,"subtitlesTextShadowBlurRadius":0,"toolTipFontStyle":"normal","toolTipShadowSpread":0,"displayTooltipInTouchScreens":true,"toolTipPaddingRight":6,"progressBarBorderRadius":4,"subtitlesFontWeight":"normal","progressBorderSize":2,"playbackBarProgressBackgroundColorRatios":[0,1],"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","paddingTop":0,"toolTipFontWeight":"normal","toolTipTextShadowBlurRadius":3,"playbackBarProgressOpacity":1,"paddingBottom":0,"firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","subtitlesTextShadowOpacity":1,"progressBarBorderSize":0,"vrPointerSelectionColor":"#FF0000","transitionDuration":500,"propagateClick":false,"progressBorderRadius":4,"toolTipPaddingBottom":4,"top":0,"surfaceReticleOpacity":0.6,"vrPointerSelectionTime":1500,"toolTipShadowHorizontalLength":0,"bottom":0,"progressLeft":10,"subtitlesBorderSize":0,"playbackBarOpacity":1,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333333","playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"playbackBarLeft":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipBorderSize":1,"surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingTop":4,"toolTipDisplayTime":600,"playbackBarRight":0,"toolTipOpacity":0.5,"playbackBarBackgroundColorDirection":"vertical","left":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColorRatios":[0,1],"borderRadius":0,"subtitlesBackgroundColor":"#000000","right":0,"playbackBarProgressBorderRadius":0,"subtitlesGap":0,"playbackBarBorderColor":"#AAAAAA"},{"minWidth":60,"class":"Container","data":{"name":"-button set"},"width":85,"gap":3,"paddingTop":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"propagateClick":true,"top":"14.6%","scrollBarMargin":2,"verticalAlign":"top","overflow":"scroll","scrollBarOpacity":0.5,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"toolTipHorizontalAlign":"center","contentOpaque":false,"height":320,"creationPolicy":"inAdvance","layout":"vertical","scrollBarWidth":10,"scrollBarVisible":"rollOver","maxHeight":320,"maxWidth":60,"scrollBarColor":"#000000","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":320,"right":"0%"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E_camera","class":"PanoramaPlayListItem","media":"this.panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"minWidth":80,"borderRadius":0,"class":"Image","data":{"name":"Image4995"},"width":80,"cursor":"hand","paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"propagateClick":true,"top":21.17,"verticalAlign":"top","toolTipHorizontalAlign":"center","height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"maxWidth":80,"left":26.3,"borderSize":0,"shadow":false,"minHeight":80,"scaleMode":"fill"},{"minWidth":60,"borderRadius":0,"class":"IconButton","data":{"name":"image button menu"},"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"propagateClick":true,"top":"6.78%","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","transparencyActive":true,"iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","maxHeight":60,"maxWidth":60,"mode":"toggle","borderSize":0,"shadow":false,"minHeight":60,"right":"0.05%"},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton FULLSCREEN"},"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","maxHeight":60,"maxWidth":60,"mode":"toggle","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":60},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton VR"},"width":60,"cursor":"hand","paddingTop":0,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","maxHeight":60,"maxWidth":60,"mode":"push","rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":60},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton FB"},"width":60,"cursor":"hand","paddingTop":0,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":60,"click":"this.openLink(this.translate('LinkBehaviour_A99CB470_BF24_034B_41D8_32775ADC450A.source'), '_blank')","transparencyActive":true,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","maxHeight":60,"maxWidth":60,"mode":"push","rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":1},{"surfaceSelectionEnabled":false,"class":"PanoramaPlayer","buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","gyroscopeEnabled":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89"},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton GYRO"},"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","maxHeight":60,"maxWidth":60,"mode":"toggle","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":60},{"hfov":360,"class":"Panorama","id":"panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E","hfovMax":130,"partial":false,"hfovMin":"150%","frames":[{"stereoCube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"rowCount":4,"url":"media/panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48},{"tags":"ondemand","width":12288,"rowCount":2,"url":"media/panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24},{"tags":"mobilevr2gen","width":24576,"rowCount":1,"url":"media/panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E_t.jpg"}],"vfov":180,"label":trans('panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E.label'),"pitch":0,"data":{"label":"T3xMUUTO Vue 3"},"thumbnailUrl":"media/panorama_E2E65DCB_ECE5_3F30_41B3_51CA52CB7F7E_t.jpg"},{"minWidth":60,"class":"IconButton","data":{"name":"IconButton HS "},"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","paddingRight":0,"paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","maxHeight":60,"maxWidth":60,"mode":"toggle","borderRadius":0,"borderSize":0,"shadow":false,"minHeight":60}],"mobileMipmappingEnabled":false,"paddingRight":0,"defaultVRPointer":"gaze","propagateClick":false,"scrollBarMargin":2,"verticalAlign":"top","scripts":{"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizFinish":TDV.Tour.Script.quizFinish,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizStart":TDV.Tour.Script.quizStart,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"registerKey":TDV.Tour.Script.registerKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"showWindow":TDV.Tour.Script.showWindow,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getKey":TDV.Tour.Script.getKey,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"initAnalytics":TDV.Tour.Script.initAnalytics,"init":TDV.Tour.Script.init,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initQuiz":TDV.Tour.Script.initQuiz,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumePlayers":TDV.Tour.Script.resumePlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"mixObject":TDV.Tour.Script.mixObject,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setValue":TDV.Tour.Script.setValue,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPixels":TDV.Tour.Script.getPixels,"getOverlays":TDV.Tour.Script.getOverlays,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setLocale":TDV.Tour.Script.setLocale,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"unregisterKey":TDV.Tour.Script.unregisterKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"downloadFile":TDV.Tour.Script.downloadFile,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"isPanorama":TDV.Tour.Script.isPanorama,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"translate":TDV.Tour.Script.translate,"textToSpeech":TDV.Tour.Script.textToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo},"overflow":"hidden","downloadEnabled":false,"scrollBarOpacity":0.5,"mouseWheelEnabled":true,"backgroundColor":["#000000"],"contentOpaque":false,"height":"100%","children":["this.MainViewer","this.label4056","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"toolTipHorizontalAlign":"center","backgroundPreloadEnabled":true,"scrollBarWidth":10,"scrollBarVisible":"rollOver","creationPolicy":"inAdvance","scrollBarColor":"#000000","desktopMipmappingEnabled":false,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464], 'cardboardAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","layout":"absolute","borderSize":0,"shadow":false,"minHeight":20,"data":{"name":"Player28156","locales":{"fr":"locale/fr.txt"},"defaultLocale":"fr","initialScale":0.65,"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jun 6 2024