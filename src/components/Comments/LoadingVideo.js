import ReactDOM from "react-dom";
import videojs from "video.js";
const vjsComponent = videojs.getComponent("Component");
class LoadingVideo extends vjsComponent {

    constructor(player, options) {
        super(player, options);
        this.state = {
            status: 1
        }

        this.on("dispose", () => {
            ReactDOM.unmountComponentAtNode(this.el())
        });
    }

    getMainTemplate(options) {
        return `
            <div class="player-loading"><div class="lds-css"><div class="lds1"></div><div class="lds2"></div><div class="lds3"></div><div class="lds4"></div></div></div>
        `;
    }

    createEl() {

        const container = super.createEl("div", {
            className: "video-js-loading",
            innerHTML: this.getMainTemplate(this.options_)
        });

        this.container = container;

        return container;
    }
}

vjsComponent.registerComponent("LoadingVideo", LoadingVideo);

export default LoadingVideo;