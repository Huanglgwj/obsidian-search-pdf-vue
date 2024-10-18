import { Plugin, Editor } from "obsidian";
import { SampleSettingTab } from "./SettingTabPage/index";
import { ExampleModal } from "./modal";
import { PdfUtil } from "./PdfUtil/index"
export default class SamplePlugin extends Plugin {
    // 在用户激活插件和插件更新时触发，这将是您设置插件大部分功能的地方
    async onload() {
        console.log('loading plugin')

        this.addRibbonIcon("dice", "搜索PDF", () => {
            new ExampleModal(this.app, (result: string) => {
                console.log('onSubmitonSubmitonSubmitonSubmitonSubmit', result);
                PdfUtil.toSerach(result);
            }).open();
        });
        // 加入插件设置页
        this.addSettingTab(new SampleSettingTab(this.app, this));

    }
    // 在用户禁用插件时触发，插件所调用的任何资源必须在这里得到释放，以防止 Obsidian 的性能受到影响
    async onunload() {
        console.log('unloading plugin')
    }
}
