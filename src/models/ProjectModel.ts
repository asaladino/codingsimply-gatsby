import _ from "lodash";

export default class ProjectModel {

    ID = 0;
    post_title = '';
    post_name = '';
    post_excerpt = '';
    post_content = '';
    promote = false;
    randomKey = 0;
    categories: string[] = [];

    screenshots = [];

    meta = {
        icon_url: null,
        git_url: null,
        screenshot_url: null,
        screenshot_url_2: null,
        screenshot_url_3: null,
        screenshot_url_4: null,
        screenshot_url_5: null
    };

    constructor(state = {}) {
        this.randomKey = _.random(0, 20);
        Object.assign(this, state);
    }

    static fromGraph(e: any) {
        const project = new ProjectModel();
        project.ID = e.node.id;
        project.post_title = e.node.frontmatter.title;
        project.post_name = e.node.fields.slug;
        project.post_content = e.node.html;
        project.categories = e.node.frontmatter.tags;
        project.screenshots = e.node.frontmatter.screenshots;
        project.meta = {
            icon_url: e.node.frontmatter.icon_url === "undefined" ? false : e.node.frontmatter.icon_url,
            git_url: e.node.frontmatter.git_url,
            screenshot_url: null,
            screenshot_url_2: null,
            screenshot_url_3: null,
            screenshot_url_4: null,
            screenshot_url_5: null
        };
        return project;
    }

    hasIcon() {
        return this.meta.icon_url !== false;
    }

    getExcept() {
        return this.post_excerpt;
    }

    getId() {
        return this.ID;
    }

    getSlug() {
        return this.post_name;
    }

    getContent() {
        return this.post_content;
    }

    getTitle() {
        return this.post_title;
    };

    getGitUrl() {
        return this.meta.git_url;
    }

    getIconUrl() {
        return this.meta.icon_url;
    }

    getScreenshot() {
        return this.screenshots.length > 0 ? this.screenshots[0] : null;
    }

    getScreenshot2() {
        return this.screenshots.length > 1 ? this.screenshots[1] : null;
    }

    getScreenshot3() {
        return this.screenshots.length > 2 ? this.screenshots[2] : null;
    }

    getScreenshot4() {
        return this.screenshots.length > 3 ? this.screenshots[3] : null;
    }

    getScreenshot5() {
        return this.screenshots.length > 4 ? this.screenshots[4] : null;
    }

    getInitials() {
        const title = this.getTitle();
        const parts = title.split(' ');
        if (parts.length === 1) {
            return parts[0].substr(0, 1).toUpperCase();
        }
        return (parts[0].substr(0, 1) + parts[1].substr(0, 1)).toUpperCase();
    };
}
