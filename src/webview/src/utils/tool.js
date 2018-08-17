// 通用插件方法

import router from 'router/router';
import {
    Toast,
    MessageBox
} from 'mint-ui'

export default {
    // 页面跳转
    $go: (page, query) => {
        if (Number(page)) {
            return router.go(page);
        }
        let route = {
            name: page
        };
        if (query) {
            route.query = query;
        }
        router.push(route);
    },

    // 无记录页面跳转
    $gorep: (page) => {
        router.replace(page);
    },

    $tip: (message, duration = 3000) => {
        Toast({
            message,
            duration
        });
    },

    $alert: (message, callback, confirmButtonText = '确定', title = '') => {
        MessageBox.alert(message, title, {
            confirmButtonText
        }).then(action => {
            if (action === 'confirm') {
                return callback()
            }
        })
    },

    $confirm: (message, callback, confirmButtonText = '确定', title = '', cancelButtonText = '取消') => {
        MessageBox.confirm(message, title, {
                confirmButtonText,
                cancelButtonText
            })
            .then(() => {
                return callback(true)
            })
            .catch(() => {
                return callback(false)
            });
    },
}