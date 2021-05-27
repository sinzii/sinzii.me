import {Config, PostUrlStyle} from './src/core/model';

export default {
    baseUrl: 'https://sinzii.me',
    baseContext: '',
    siteName: 'Thang X. Vu (@sinzii)',
    siteDescription: 'Where my thoughts wander...',
    dateTimeFormat: 'DD/MM/YYYY - HH:mm',
    dateFormat: 'DD/MM/YYYY',
    postUrlStyle: PostUrlStyle.YEAR_MONTH_SLUG,
    me: {
        sideProjects: [
            {
                name: '<strong>meblog</strong> - A DIY blog engine',
                url: 'https://github.com/sinzii/meblog'
            }, {
                name: '<strong>frameworkless</strong> - A frameworkless NodeJS application',
                url: 'https://github.com/sinzii/frameworkless'
            }
        ]
    }
} as Config
