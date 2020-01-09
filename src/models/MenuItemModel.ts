import { main } from '../constants/main';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'


export default class MenuItemModel {
    ID = 0;
    title = '';
    url = '';
    constructor(state: any) {
        Object.assign(this, state);
    }
    getTitle() {
        return this.title;
    }
    getIcon(): IconName {
        if (this.getTitle().toLowerCase() === 'profile') {
            return 'user-alt';
        }
        if (this.getTitle().toLowerCase() === 'portfolio') {
            return 'bookmark';
        }
        if (this.getTitle().toLowerCase() === 'books') {
            return 'book';
        }
        if (this.getTitle().toLowerCase() === 'stack overflow') {
            return 'stack-overflow';
        }
        return this.getTitle().toLowerCase() as IconName;
    }
    getIconPrefix(): IconPrefix {
        if (
            this.getTitle().toLowerCase() === 'github' ||
            this.getTitle().toLowerCase() === 'stack overflow'
        ) {
            return 'fab';
        }
        return 'fas';
    }
    getId() {
        return this.ID;
    }
    isInternalLink() {
        return this.url.indexOf('http') !== 0;
    }
    getUrl() {
        return this.url;
    }
    isCurrentItem() {
        return false;
    }
    isActive() {
        if (this.isCurrentItem()) {
            return 'is-active';
        }
    }
}
