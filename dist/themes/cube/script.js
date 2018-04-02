/*!
betajs-media-components - v0.0.95 - 2018-04-02
Copyright (c) Ziggeo,Oliver Friedmann
Apache-2.0 Software License.
*/
(function () {

var Scoped = this.subScope();

Scoped.binding("browser", "global:BetaJS.Browser");
Scoped.binding("dynamics", "global:BetaJS.Dynamics");
Scoped.binding("module", "global:BetaJS.MediaComponents");

Scoped.extend("module:Assets.playerthemes", [
    "browser:Info",
    "dynamics:Parser"
], function(Info, Parser) {
    var ie8 = Info.isInternetExplorer() && Info.internetExplorerVersion() <= 8;
    Parser.registerFunctions({ /**/"css": function (obj) { with (obj) { return css; } }, "activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''": function (obj) { with (obj) { return activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''; } }, "title": function (obj) { with (obj) { return title; } }, "submit()": function (obj) { with (obj) { return submit(); } }, "submittable": function (obj) { with (obj) { return submittable; } }, "string('submit-video')": function (obj) { with (obj) { return string('submit-video'); } }, "rerecord()": function (obj) { with (obj) { return rerecord(); } }, "rerecordable": function (obj) { with (obj) { return rerecordable; } }, "string('rerecord-video')": function (obj) { with (obj) { return string('rerecord-video'); } }, "play()": function (obj) { with (obj) { return play(); } }, "!playing": function (obj) { with (obj) { return !playing; } }, "string('play-video')": function (obj) { with (obj) { return string('play-video'); } }, "pause()": function (obj) { with (obj) { return pause(); } }, "disablepause ? css + '-disabled' : ''": function (obj) { with (obj) { return disablepause ? css + '-disabled' : ''; } }, "playing": function (obj) { with (obj) { return playing; } }, "disablepause ? string('pause-video-disabled') : string('pause-video')": function (obj) { with (obj) { return disablepause ? string('pause-video-disabled') : string('pause-video'); } }, "string('elapsed-time')": function (obj) { with (obj) { return string('elapsed-time'); } }, "formatTime(position)": function (obj) { with (obj) { return formatTime(position); } }, "string('total-time')": function (obj) { with (obj) { return string('total-time'); } }, "formatTime(duration || position)": function (obj) { with (obj) { return formatTime(duration || position); } }, "toggle_volume()": function (obj) { with (obj) { return toggle_volume(); } }, "string(volume > 0 ? 'volume-mute' : 'volume-unmute')": function (obj) { with (obj) { return string(volume > 0 ? 'volume-mute' : 'volume-unmute'); } }, "css + '-icon-volume-' + (volume >= 0.5 ? 'up' : (volume > 0 ? 'down' : 'off'))": function (obj) { with (obj) { return css + '-icon-volume-' + (volume >= 0.5 ? 'up' : (volume > 0 ? 'down' : 'off')); } }, "set_volume(volume + 0.1)": function (obj) { with (obj) { return set_volume(volume + 0.1); } }, "set_volume(volume - 0.1)": function (obj) { with (obj) { return set_volume(volume - 0.1); } }, "startUpdateVolume(domEvent)": function (obj) { with (obj) { return startUpdateVolume(domEvent); } }, "stopUpdateVolume(domEvent)": function (obj) { with (obj) { return stopUpdateVolume(domEvent); } }, "progressUpdateVolume(domEvent)": function (obj) { with (obj) { return progressUpdateVolume(domEvent); } }, "{width: Math.ceil(1+Math.min(99, Math.round(volume * 100))) + '%'}": function (obj) { with (obj) { return {width: Math.ceil(1+Math.min(99, Math.round(volume * 100))) + '%'}; } }, "string('volume-button')": function (obj) { with (obj) { return string('volume-button'); } }, "toggle_stream()": function (obj) { with (obj) { return toggle_stream(); } }, "streams.length > 1 && currentstream": function (obj) { with (obj) { return streams.length > 1 && currentstream; } }, "string('change-resolution')": function (obj) { with (obj) { return string('change-resolution'); } }, "currentstream_label": function (obj) { with (obj) { return currentstream_label; } }, "show_airplay_devices()": function (obj) { with (obj) { return show_airplay_devices(); } }, "airplaybuttonvisible": function (obj) { with (obj) { return airplaybuttonvisible; } }, "castbuttonvisble": function (obj) { with (obj) { return castbuttonvisble; } }, "toggle_fullscreen()": function (obj) { with (obj) { return toggle_fullscreen(); } }, "fullscreen": function (obj) { with (obj) { return fullscreen; } }, "fullscreened ? string('exit-fullscreen-video') : string('fullscreen-video')": function (obj) { with (obj) { return fullscreened ? string('exit-fullscreen-video') : string('fullscreen-video'); } }, "fullscreened ? 'small' : 'full'": function (obj) { with (obj) { return fullscreened ? 'small' : 'full'; } }, "tracktags.length > 0 && tracktagssupport": function (obj) { with (obj) { return tracktags.length > 0 && tracktagssupport; } }, "tracktextvisible ? 'active' : 'inactive'": function (obj) { with (obj) { return tracktextvisible ? 'active' : 'inactive'; } }, "tracktextvisible ? string('close-tracks') : string('show-tracks')": function (obj) { with (obj) { return tracktextvisible ? string('close-tracks') : string('show-tracks'); } }, "toggle_tracks()": function (obj) { with (obj) { return toggle_tracks(); } }, "hover_cc(true)": function (obj) { with (obj) { return hover_cc(true); } }, "hover_cc(false)": function (obj) { with (obj) { return hover_cc(false); } }, "disableseeking ? css + '-disabled' : ''": function (obj) { with (obj) { return disableseeking ? css + '-disabled' : ''; } }, "seek(position + skipseconds)": function (obj) { with (obj) { return seek(position + skipseconds); } }, "seek(position - skipseconds)": function (obj) { with (obj) { return seek(position - skipseconds); } }, "startUpdatePosition(domEvent)": function (obj) { with (obj) { return startUpdatePosition(domEvent); } }, "stopUpdatePosition(domEvent)": function (obj) { with (obj) { return stopUpdatePosition(domEvent); } }, "progressUpdatePosition(domEvent)": function (obj) { with (obj) { return progressUpdatePosition(domEvent); } }, "{width: Math.round(duration ? cached / duration * 100 : 0) + '%'}": function (obj) { with (obj) { return {width: Math.round(duration ? cached / duration * 100 : 0) + '%'}; } }, "{width: Math.round(duration ? position / duration * 100 : 0) + '%'}": function (obj) { with (obj) { return {width: Math.round(duration ? position / duration * 100 : 0) + '%'}; } }, "string('video-progress')": function (obj) { with (obj) { return string('video-progress'); } }/**/ });
    return {
        "cube": {
            css: "ba-videoplayer-cube-theme",
            csstheme: "ba-videoplayer-cube-theme",
            tmplcontrolbar: "\n<div data-selector=\"video-title-block\" class=\"{{css}}-video-title-block {{activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''}}\" ba-if=\"{{title}}\">\n    <p class=\"{{css}}-video-title\">\n        {{title}}\n    </p>\n</div>\n\n<div class=\"{{css}}-dashboard {{activitydelta > 5000 && hideoninactivity ? (css + '-dashboard-hidden') : ''}}\">\n\n    <div class=\"{{css}}-left-block\">\n\n        <div tabindex=\"0\" ba-hotkey:space^enter=\"{{submit()}}\" data-selector=\"submit-video-button\"\n             class=\"{{css}}-button-container\" ba-if=\"{{submittable}}\" ba-click=\"{{submit()}}\">\n            <div class=\"{{css}}-button-inner\">\n                {{string('submit-video')}}\n            </div>\n        </div>\n\n        <div tabindex=\"0\" ba-hotkey:space^enter=\"{{rerecord()}}\" data-selector=\"button-icon-ccw\"\n             class=\"{{css}}-button-container\" ba-if=\"{{rerecordable}}\"\n             ba-click=\"{{rerecord()}}\" title=\"{{string('rerecord-video')}}\">\n            <div class=\"{{css}}-button-inner\">\n                <i class=\"{{css}}-icon-ccw\"></i>\n            </div>\n        </div>\n\n        <div tabindex=\"0\" ba-hotkey:space^enter=\"{{play()}}\" data-selector=\"button-icon-play\" class=\"{{css}}-button-container\"\n             ba-if=\"{{!playing}}\" ba-click=\"{{play()}}\" title=\"{{string('play-video')}}\">\n            <div class=\"{{css}}-button-inner\">\n                <i class=\"{{css}}-icon-play\"></i>\n            </div>\n        </div>\n\n        <div tabindex=\"0\" ba-hotkey:space^enter=\"{{pause()}}\" data-selector=\"button-icon-pause\" class=\"{{css}}-button-container {{disablepause ? css + '-disabled' : ''}}\"\n             ba-if=\"{{playing}}\" ba-click=\"{{pause()}}\" title=\"{{disablepause ? string('pause-video-disabled') : string('pause-video')}}\">\n            <div class=\"{{css}}-button-inner\">\n                <i class=\"{{css}}-icon-pause\"></i>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"{{css}}-right-block\">\n\n        <div class=\"{{css}}-button-container {{css}}-timer-container\">\n            <div class=\"{{css}}-time-container\">\n                <div class=\"{{css}}-time-value\" title=\"{{string('elapsed-time')}}\">{{formatTime(position)}}</div>\n            </div>\n            <p> / </p>\n            <div class=\"{{css}}-time-container\">\n                <div class=\"{{css}}-time-value\" title=\"{{string('total-time')}}\">{{formatTime(duration || position)}}</div>\n            </div>\n        </div>\n\n        <div tabindex=\"0\" ba-hotkey:space^enter=\"{{toggle_volume()}}\" data-selector=\"button-icon-volume\" class=\"{{css}}-button-container\"\n             ba-click=\"{{toggle_volume()}}\" title=\"{{string(volume > 0 ? 'volume-mute' : 'volume-unmute')}}\">\n            <div class=\"{{css}}-button-inner\">\n                <i class=\"{{css + '-icon-volume-' + (volume >= 0.5 ? 'up' : (volume > 0 ? 'down' : 'off')) }}\"></i>\n            </div>\n        </div>\n\n        <div class=\"{{css}}-volumebar\">\n            <div tabindex=\"0\"\n                 ba-hotkey:right=\"{{set_volume(volume + 0.1)}}\"\n                 ba-hotkey:left=\"{{set_volume(volume - 0.1)}}\"\n                 data-selector=\"button-volume-bar\" class=\"{{css}}-volumebar-inner\"\n                 onmousedown=\"{{startUpdateVolume(domEvent)}}\"\n                 onmouseup=\"{{stopUpdateVolume(domEvent)}}\"\n                 onmouseleave=\"{{stopUpdateVolume(domEvent)}}\"\n                 onmousemove=\"{{progressUpdateVolume(domEvent)}}\">\n                <div class=\"{{css}}-volumebar-position\" ba-styles=\"{{{width: Math.ceil(1+Math.min(99, Math.round(volume * 100))) + '%'}}}\" title=\"{{string('volume-button')}}\"></div>\n            </div>\n        </div>\n\n        <div tabindex=\"0\" ba-hotkey:space^enter=\"{{toggle_stream()}}\" data-selector=\"button-stream-label\"\n              class=\"{{css}}-button-container\" ba-if=\"{{streams.length > 1 && currentstream}}\"\n              ba-click=\"{{toggle_stream()}}\" title=\"{{string('change-resolution')}}\"\n        >\n            <div class=\"{{css}}-button-inner {{css}}-stream-label-container\">\n                <div class=\"{{css}}-button-text {{css}}-stream-label\">\n                    <span>{{currentstream_label}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div tabindex=\"0\" ba-hotkey:space^enter=\"{{show_airplay_devices()}}\"\n             data-selector=\"button-airplay\" class=\"{{css}}-button-container {{css}}-airplay-container\"\n             ba-show=\"{{airplaybuttonvisible}}\" ba-click=\"{{show_airplay_devices()}}\">\n            <svg width=\"16px\" height=\"11px\" viewBox=\"0 0 16 11\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <!-- Generator: Sketch 3.3.2 (12043) - http://www.bohemiancoding.com/sketch -->\n                <title>Airplay</title>\n                <desc>Airplay icon.</desc>\n                <defs></defs>\n                <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n                    <path d=\"M4,11 L12,11 L8,7 L4,11 Z M14.5454545,0 L1.45454545,0 C0.654545455,0 0,0.5625 0,1.25 L0,8.75 C0,9.4375 0.654545455,10 1.45454545,10 L4.36363636,10 L4.36363636,8.75 L1.45454545,8.75 L1.45454545,1.25 L14.5454545,1.25 L14.5454545,8.75 L11.6363636,8.75 L11.6363636,10 L14.5454545,10 C15.3454545,10 16,9.4375 16,8.75 L16,1.25 C16,0.5625 15.3454545,0 14.5454545,0 L14.5454545,0 Z\" sketch:type=\"MSShapeGroup\"></path>\n                </g>\n            </svg>\n        </div>\n\n        <div data-selector=\"button-chromecast\" class=\"{{css}}-button-container {{css}}-cast-button-container\" ba-show=\"{{castbuttonvisble}}\">\n            <button class=\"{{css}}-gcast-button\" is=\"google-cast-button\"></button>\n        </div>\n\n        <div tabindex=\"0\" ba-hotkey:space^enter=\"{{toggle_fullscreen()}}\" data-selector=\"button-icon-resize-full\" class=\"{{css}}-button-container\"\n             ba-if={{fullscreen}} ba-click=\"{{toggle_fullscreen()}}\" title=\"{{ fullscreened ? string('exit-fullscreen-video') : string('fullscreen-video') }}\">\n            <div class=\"{{css}}-button-inner {{css}}-full-screen-btn-inner\">\n                <i class=\"{{css}}-icon-resize-{{fullscreened ? 'small' : 'full'}}\"></i>\n            </div>\n        </div>\n\n        <div data-selector=\"cc-button-container\" ba-if=\"{{tracktags.length > 0 && tracktagssupport}}\"\n             class=\"{{css}}-button-container  {{css}}-cc-{{tracktextvisible ? 'active' : 'inactive'}}\"\n             title=\"{{ tracktextvisible ? string('close-tracks') : string('show-tracks')}}\"\n             ba-click=\"{{toggle_tracks()}}\"\n             onmouseover=\"{{hover_cc(true)}}\"\n             onmouseleave=\"{{hover_cc(false)}}\"\n        >\n            <div class=\"{{css}}-button-inner {{css}}-subtitle-button-inner\">\n                <i class=\"{{css}}-icon-subtitle\"></i>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"{{css}}-progressbar {{disableseeking ? css + '-disabled' : ''}}\">\n        <div tabindex=\"0\"\n             ba-hotkey:right=\"{{seek(position + skipseconds)}}\"\n             ba-hotkey:left=\"{{seek(position - skipseconds)}}\"\n             data-selector=\"progress-bar-inner\" class=\"{{css}}-progressbar-inner\"\n             onmousedown=\"{{startUpdatePosition(domEvent)}}\"\n             onmouseup=\"{{stopUpdatePosition(domEvent)}}\"\n             onmouseleave=\"{{stopUpdatePosition(domEvent)}}\"\n             onmousemove=\"{{progressUpdatePosition(domEvent)}}\">\n\n            <div class=\"{{css}}-progressbar-cache\" ba-styles=\"{{{width: Math.round(duration ? cached / duration * 100 : 0) + '%'}}}\"></div>\n            <div class=\"{{css}}-progressbar-position\" ba-styles=\"{{{width: Math.round(duration ? position / duration * 100 : 0) + '%'}}}\" title=\"{{string('video-progress')}}\"></div>\n        </div>\n    </div>\n\n</div>\n",
            cssloader: ie8 ? "ba-videoplayer" : "",
            cssmessage: "ba-videoplayer",
            cssplaybutton: ie8 ? "ba-videoplayer" : ""
        }
    };
});
Scoped.extend("module:Assets.recorderthemes", [
    "dynamics:Parser"
], function(Parser) {
    Parser.registerFunctions({ /**/"css": function (obj) { with (obj) { return css; } }, "settingsvisible && settingsopen": function (obj) { with (obj) { return settingsvisible && settingsopen; } }, "cameras": function (obj) { with (obj) { return cameras; } }, "selectCamera(camera.id)": function (obj) { with (obj) { return selectCamera(camera.id); } }, "selectedcamera == camera.id": function (obj) { with (obj) { return selectedcamera == camera.id; } }, "camera.label": function (obj) { with (obj) { return camera.label; } }, "microphones": function (obj) { with (obj) { return microphones; } }, "audio": function (obj) { with (obj) { return audio; } }, "selectMicrophone(microphone.id)": function (obj) { with (obj) { return selectMicrophone(microphone.id); } }, "selectedmicrophone == microphone.id": function (obj) { with (obj) { return selectedmicrophone == microphone.id; } }, "microphone.label": function (obj) { with (obj) { return microphone.label; } }, "rerecordvisible": function (obj) { with (obj) { return rerecordvisible; } }, "rerecord()": function (obj) { with (obj) { return rerecord(); } }, "hover(string('rerecord-tooltip'))": function (obj) { with (obj) { return hover(string('rerecord-tooltip')); } }, "unhover()": function (obj) { with (obj) { return unhover(); } }, "string('rerecord')": function (obj) { with (obj) { return string('rerecord'); } }, "cancelvisible": function (obj) { with (obj) { return cancelvisible; } }, "cancel()": function (obj) { with (obj) { return cancel(); } }, "hover(string('cancel-tooltip'))": function (obj) { with (obj) { return hover(string('cancel-tooltip')); } }, "string('cancel')": function (obj) { with (obj) { return string('cancel'); } }, "settingsvisible": function (obj) { with (obj) { return settingsvisible; } }, "settingsopen=!settingsopen": function (obj) { with (obj) { return settingsopen=!settingsopen; } }, "settingsopen ? 'selected' : 'unselected'": function (obj) { with (obj) { return settingsopen ? 'selected' : 'unselected'; } }, "hover(string('settings'))": function (obj) { with (obj) { return hover(string('settings')); } }, "!noaudio && !allowscreen": function (obj) { with (obj) { return !noaudio && !allowscreen; } }, "hover(string(microphonehealthy ? 'microphonehealthy' : 'microphoneunhealthy'))": function (obj) { with (obj) { return hover(string(microphonehealthy ? 'microphonehealthy' : 'microphoneunhealthy')); } }, "microphonehealthy ? 'good' : 'bad'": function (obj) { with (obj) { return microphonehealthy ? 'good' : 'bad'; } }, "!novideo && !allowscreen": function (obj) { with (obj) { return !novideo && !allowscreen; } }, "hover(string(camerahealthy ? 'camerahealthy' : 'cameraunhealthy'))": function (obj) { with (obj) { return hover(string(camerahealthy ? 'camerahealthy' : 'cameraunhealthy')); } }, "camerahealthy ? 'good' : 'bad'": function (obj) { with (obj) { return camerahealthy ? 'good' : 'bad'; } }, "recordvisible": function (obj) { with (obj) { return recordvisible; } }, "record()": function (obj) { with (obj) { return record(); } }, "hover(string('record-tooltip'))": function (obj) { with (obj) { return hover(string('record-tooltip')); } }, "string('record')": function (obj) { with (obj) { return string('record'); } }, "stopvisible": function (obj) { with (obj) { return stopvisible; } }, "controlbarlabel && !rerecordvisible": function (obj) { with (obj) { return controlbarlabel && !rerecordvisible; } }, "controlbarlabel": function (obj) { with (obj) { return controlbarlabel; } }, "stop()": function (obj) { with (obj) { return stop(); } }, "mintimeindicator ? css + '-disabled': ''": function (obj) { with (obj) { return mintimeindicator ? css + '-disabled': ''; } }, "mintimeindicator ? string('stop-available-after').replace('%d', timeminlimit) : string('stop-tooltip')": function (obj) { with (obj) { return mintimeindicator ? string('stop-available-after').replace('%d', timeminlimit) : string('stop-tooltip'); } }, "hover(mintimeindicator ? string('stop-available-after').replace('%d', timeminlimit) : string('stop-tooltip'))": function (obj) { with (obj) { return hover(mintimeindicator ? string('stop-available-after').replace('%d', timeminlimit) : string('stop-tooltip')); } }, "string('stop')": function (obj) { with (obj) { return string('stop'); } }, "skipvisible": function (obj) { with (obj) { return skipvisible; } }, "skip()": function (obj) { with (obj) { return skip(); } }, "hover(string('skip-tooltip'))": function (obj) { with (obj) { return hover(string('skip-tooltip')); } }, "string('skip')": function (obj) { with (obj) { return string('skip'); } }, "uploadcovershotvisible": function (obj) { with (obj) { return uploadcovershotvisible; } }, "hover(string('upload-covershot-tooltip'))": function (obj) { with (obj) { return hover(string('upload-covershot-tooltip')); } }, "uploadCovershot(domEvent)": function (obj) { with (obj) { return uploadCovershot(domEvent); } }, "covershot_accept_string": function (obj) { with (obj) { return covershot_accept_string; } }, "string('upload-covershot')": function (obj) { with (obj) { return string('upload-covershot'); } }/**/ });
    Parser.registerFunctions({ /**/"css": function (obj) { with (obj) { return css; } }, "left()": function (obj) { with (obj) { return left(); } }, "images": function (obj) { with (obj) { return images; } }, "select(image)": function (obj) { with (obj) { return select(image); } }, "{left: image.left + 'px', top: image.top + 'px', width: image.width + 'px', height: image.height + 'px'}": function (obj) { with (obj) { return {left: image.left + 'px', top: image.top + 'px', width: image.width + 'px', height: image.height + 'px'}; } }, "right()": function (obj) { with (obj) { return right(); } }/**/ });
    Parser.registerFunctions({ /**/"css": function (obj) { with (obj) { return css; } }, "actions": function (obj) { with (obj) { return actions; } }, "click_action(action)": function (obj) { with (obj) { return click_action(action); } }, "action.index": function (obj) { with (obj) { return action.index; } }, "action.select && action.capture": function (obj) { with (obj) { return action.select && action.capture; } }, "select_file_action(action, domEvent)": function (obj) { with (obj) { return select_file_action(action, domEvent); } }, "action.accept": function (obj) { with (obj) { return action.accept; } }, "action.select && !action.capture": function (obj) { with (obj) { return action.select && !action.capture; } }, "action.label": function (obj) { with (obj) { return action.label; } }, "action.icon": function (obj) { with (obj) { return action.icon; } }/**/ });
    Parser.registerFunctions({ /**/"css": function (obj) { with (obj) { return css; } }, "click()": function (obj) { with (obj) { return click(); } }, "shortMessage ? 'short-message' : 'long-message'": function (obj) { with (obj) { return shortMessage ? 'short-message' : 'long-message'; } }, "message || \"\"": function (obj) { with (obj) { return message || ""; } }, "links && links.length > 0": function (obj) { with (obj) { return links && links.length > 0; } }, "links": function (obj) { with (obj) { return links; } }, "linkClick(link)": function (obj) { with (obj) { return linkClick(link); } }, "link.title": function (obj) { with (obj) { return link.title; } }/**/ });
    return {
        "cube": {
            css: "ba-videorecorder-theme-cube",
            cssmessage: "ba-videorecorder-theme-cube",
            cssloader: "ba-videorecorder",
            tmplcontrolbar: "<div class=\"{{css}}-dashboard\">\n\n\t<div class=\"{{css}}-settings-front\">\n\n\t\t<!-- Popup Settings Selections, initially hidden, appear when click button for settings -->\n\t\t<div data-selector=\"recorder-settings\" class=\"{{css}}-settings\" ba-show=\"{{settingsvisible && settingsopen}}\">\n\t\t\t<div data-selector=\"settings-list-front\" class=\"{{css}}-bubble-info\">\n\t\t\t\t<ul data-selector=\"camera-settings\" ba-repeat=\"{{camera :: cameras}}\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<input tabindex=\"0\" ba-hotkey:space^enter=\"{{selectCamera(camera.id)}}\" type='radio'\n\t\t\t\t\t\t\t   name='camera' value=\"{{selectedcamera == camera.id}}\" onclick=\"{{selectCamera(camera.id)}}\" />\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<label tabindex=\"0\" ba-hotkey:space^enter=\"{{selectCamera(camera.id)}}\" onclick=\"{{selectCamera(camera.id)}}\">\n\t\t\t\t\t\t\t{{camera.label}}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul data-selector=\"microphone-settings\" ba-repeat=\"{{microphone :: microphones}}\" ba-show=\"{{audio}}\">\n\t\t\t\t\t<li tabindex=\"0\" ba-hotkey:space^enter=\"{{selectMicrophone(microphone.id)}}\" onclick=\"{{selectMicrophone(microphone.id)}}\">\n\t\t\t\t\t\t<input type='radio' name='microphone' value=\"{{selectedmicrophone == microphone.id}}\" />\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t{{microphone.label}}\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<!-- Control bar, footer part which holds all buttons -->\n\t<div data-selector=\"controlbar\" class=\"{{css}}-controlbar\">\n\n\t\t<div class=\"{{css}}-controlbar-center-section\">\n\n\t\t\t<div class=\"{{css}}-button-container\" ba-show=\"{{rerecordvisible}}\">\n\t\t\t\t<div tabindex=\"0\" ba-hotkey:space^enter=\"{{rerecord()}}\"\n\t\t\t\t\t data-selector=\"rerecord-primary-button\" class=\"{{css}}-button-primary\"\n\t\t\t\t\t onclick=\"{{rerecord()}}\"\n\t\t\t\t\t onmouseenter=\"{{hover(string('rerecord-tooltip'))}}\"\n\t\t\t\t\t onmouseleave=\"{{unhover()}}\">\n\t\t\t\t\t{{string('rerecord')}}\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"{{css}}-button-container\" ba-show=\"{{cancelvisible}}\">\n\t\t\t\t<div tabindex=\"0\" ba-hotkey:space^enter=\"{{cancel()}}\"\n\t\t\t\t\t data-selector=\"cancel-primary-button\" class=\"{{css}}-button-primary\"\n\t\t\t\t\t onclick=\"{{cancel()}}\"\n\t\t\t\t\t onmouseenter=\"{{hover(string('cancel-tooltip'))}}\"\n\t\t\t\t\t onmouseleave=\"{{unhover()}}\">\n\t\t\t\t\t{{string('cancel')}}\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"{{css}}-controlbar-left-section\" ba-show=\"{{settingsvisible}}\">\n\n            <div class=\"{{css}}-button\" ba-show=\"{{settingsvisible}}\">\n\n\t\t\t\t<div tabindex=\"0\" ba-hotkey:space^enter=\"{{settingsopen=!settingsopen}}\"\n\t\t\t\t\t data-selector=\"record-button-icon-cog\" class=\"{{css}}-button-inner {{css}}-button-{{settingsopen ? 'selected' : 'unselected' }}\"\n\t\t\t\t\t onclick=\"{{settingsopen=!settingsopen}}\"\n\t\t\t\t\t onmouseenter=\"{{hover(string('settings'))}}\"\n\t\t\t\t\t onmouseleave=\"{{unhover()}}\" >\n\t\t\t\t\t<i class=\"{{css}}-icon-cog\"></i>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"{{css}}-button\" ba-show=\"{{!noaudio && !allowscreen}}\">\n\t\t\t\t<div data-selector=\"record-button-icon-mic\" class=\"{{css}}-button-inner\"\n\t\t\t\t\tonmouseenter=\"{{hover(string(microphonehealthy ? 'microphonehealthy' : 'microphoneunhealthy'))}}\"\n\t\t\t\t\tonmouseleave=\"{{unhover()}}\">\n\t\t\t\t\t<i class=\"{{css}}-icon-mic {{css}}-icon-state-{{microphonehealthy ? 'good' : 'bad' }}\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"{{css}}-button\" ba-show=\"{{!novideo && !allowscreen}}\">\n\t\t\t\t<div data-selector=\"record-button-icon-videocam\" class=\"{{css}}-button-inner\"\n\t\t\t\t\tonmouseenter=\"{{hover(string(camerahealthy ? 'camerahealthy' : 'cameraunhealthy'))}}\"\n\t\t\t\t\tonmouseleave=\"{{unhover()}}\">\n                    <i class=\"{{css}}-icon-videocam {{css}}-icon-state-{{ camerahealthy ? 'good' : 'bad' }}\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"{{css}}-controlbar-right-section\">\n\n\t\t\t<div class=\"{{css}}-rightbutton-container\" ba-show=\"{{recordvisible}}\">\n\t\t\t\t<div tabindex=\"0\" ba-hotkey:space^enter=\"{{record()}}\"\n\t\t\t\t\t data-selector=\"record-primary-button\" class=\"{{css}}-button-primary\"\n\t\t\t\t\t onclick=\"{{record()}}\"\n\t\t\t\t\t onmouseenter=\"{{hover(string('record-tooltip'))}}\"\n\t\t\t\t\t onmouseleave=\"{{unhover()}}\">\n\t\t\t\t\t{{string('record')}}\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"{{css}}-stop-container\" ba-show=\"{{stopvisible}}\">\n\n\t\t\t<div class=\"{{css}}-timer-container\">\n\t\t\t\t<div class=\"{{css}}-label-container\" ba-show=\"{{controlbarlabel && !rerecordvisible}}\">\n\t\t\t\t\t<div data-selector=\"record-label-block\" class=\"{{css}}-label {{css}}-button-primary\">\n\t\t\t\t\t\t{{controlbarlabel}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"{{css}}-stop-button-container\">\n\t\t\t\t<div tabindex=\"0\" ba-hotkey:space^enter=\"{{stop()}}\"\n\t\t\t\t\t data-selector=\"stop-primary-button\" class=\"{{css}}-button-primary {{mintimeindicator ? css + '-disabled': ''}}\"\n\t\t\t\t\t title=\"{{mintimeindicator ? string('stop-available-after').replace('%d', timeminlimit) : string('stop-tooltip')}}\"\n\t\t\t\t\t onclick=\"{{stop()}}\"\n\t\t\t\t\t onmouseenter=\"{{hover(mintimeindicator ? string('stop-available-after').replace('%d', timeminlimit) : string('stop-tooltip'))}}\"\n\t\t\t\t\t onmouseleave=\"{{unhover()}}\">\n\t\t\t\t\t{{string('stop')}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n        <div class=\"{{css}}-centerbutton-container\" ba-show=\"{{skipvisible}}\">\n            <div tabindex=\"0\" ba-hotkey:space^enter=\"{{skip()}}\"\n\t\t\t\t data-selector=\"skip-primary-button\" class=\"{{css}}-button-primary\"\n                 onclick=\"{{skip()}}\"\n                 onmouseenter=\"{{hover(string('skip-tooltip'))}}\"\n                 onmouseleave=\"{{unhover()}}\">\n                {{string('skip')}}\n            </div>\n        </div>\n\n\n        <div class=\"{{css}}-rightbutton-container\" ba-if=\"{{uploadcovershotvisible}}\">\n            <div data-selector=\"covershot-primary-button\" class=\"{{css}}-button-primary\"\n                 onmouseenter=\"{{hover(string('upload-covershot-tooltip'))}}\"\n                 onmouseleave=\"{{unhover()}}\">\n                <input type=\"file\"\n                       class=\"{{css}}-chooser-file\"\n                       style=\"height:100px\"\n                       onchange=\"{{uploadCovershot(domEvent)}}\"\n                       accept=\"{{covershot_accept_string}}\" />\n                <span>\n                    {{string('upload-covershot')}}\n                </span>\n            </div>\n        </div>\n\n\t</div>\n\n</div>\n",
            tmplimagegallery: "<div data-selector=\"image-gallery\" class=\"{{css}}-image-gallery-container\">\n\n\t<div data-selector=\"slider-left-button\" class=\"{{css}}-imagegallery-leftbutton\">\n\t\t<div tabindex=\"0\" ba-hotkey:space^enter^left=\"{{left()}}\"\n\t\t\t data-selector=\"slider-left-inner-button\" class=\"{{css}}-imagegallery-button-inner\" onclick=\"{{left()}}\">\n\t\t\t<i class=\"{{css}}-icon-left-open\"></i>\n\t\t</div>\n\t</div>\n\n\t<div data-selector=\"images-imagegallery-container\" ba-repeat=\"{{image::images}}\" class=\"{{css}}-imagegallery-container\" data-gallery-container>\n\t\t<div tabindex=\"0\" ba-hotkey:space^enter=\"{{select(image)}}\" class=\"{{css}}-imagegallery-image\"\n\t\t\t ba-styles=\"{{{left: image.left + 'px', top: image.top + 'px', width: image.width + 'px', height: image.height + 'px'}}}\"\n\t\t\t onclick=\"{{select(image)}}\">\n\t\t</div>\n\t</div>\n\n\t<div data-selector=\"slider-right-button\" class=\"{{css}}-imagegallery-rightbutton\">\n\t\t<div tabindex=\"0\" ba-hotkey:space^enter^right=\"{{right()}}\"\n\t\t\t data-selector=\"slider-right-inner-button\" class=\"{{css}}-imagegallery-button-inner\"\n\t\t\t onclick=\"{{right()}}\">\n\t\t\t<i class=\"{{css}}-icon-right-open\"></i>\n\t\t</div>\n\t</div>\n\n</div>\n",
            tmplchooser: "<div class=\"{{css}}-chooser-container\">\n\n\t<div class=\"{{css}}-chooser-button-container\">\n\n\t\t<div ba-repeat=\"{{action :: actions}}\">\n\t\t\t<div tabindex=\"0\" ba-hotkey:space^enter=\"{{click_action(action)}}\"\n\t\t\t\t class=\"{{css}}-chooser-button-{{action.index}}\"\n\t\t\t\t ba-click=\"{{click_action(action)}}\">\n\t\t\t\t<input ba-if=\"{{action.select && action.capture}}\"\n\t\t\t\t\t   type=\"file\"\n\t\t\t\t\t   class=\"{{css}}-chooser-file\"\n\t\t\t\t\t   onchange=\"{{select_file_action(action, domEvent)}}\"\n\t\t\t\t\t   accept=\"{{action.accept}}\"\n\t\t\t\t\t   capture />\n\t\t\t\t<input ba-if=\"{{action.select && !action.capture}}\"\n\t\t\t\t\t   type=\"file\"\n\t\t\t\t\t   class=\"{{css}}-chooser-file\"\n\t\t\t\t\t   onchange=\"{{select_file_action(action, domEvent)}}\"\n\t\t\t\t\t   accept=\"{{action.accept}}\"\n\t\t\t\t/>\n\t\t\t\t<span>\n\t\t\t\t\t{{action.label}}\n\t\t\t\t</span>\n\t\t\t\t<i class=\"{{css}}-icon-{{action.icon}}\"\n\t\t\t\t   ba-if=\"{{action.icon}}\"></i>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>",
            tmplmessage: "<div data-selector=\"recorder-message-container\" class=\"{{css}}-message-container\" ba-click=\"{{click()}}\">\n    <div class=\"{{css}}-top-inner-message-container {{css}}-{{shortMessage ? 'short-message' : 'long-message'}}\">\n        <div class=\"{{css}}-first-inner-message-container\">\n            <div class=\"{{css}}-second-inner-message-container\">\n                <div class=\"{{css}}-third-inner-message-container\">\n                    <div class=\"{{css}}-fourth-inner-message-container\">\n                        <div data-selector=\"recorder-message-block\" class='{{css}}-message-message'>\n                            <p>\n                                {{message || \"\"}}\n                            </p>\n                            <ul ba-if=\"{{links && links.length > 0}}\" ba-repeat=\"{{link :: links}}\">\n                                <li>\n                                    <a href=\"javascript:;\" ba-click=\"{{linkClick(link)}}\">\n                                        {{link.title}}\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
        }
    };
});
}).call(Scoped);