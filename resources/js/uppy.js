import {
    Core as Uppy,
    XHRUpload,
    DragDrop,
    Dashboard,
    AwsS3Multipart
} from 'uppy'

require('uppy/dist/uppy.min.css')

const uppy = Uppy()
    .use(Dashboard, {
        inline: true,
        target: '#drag-drop-area',
    })
    .use(AwsS3Multipart, {
        companionUrl: 'https://upload.gcm.li/download/'
    })

uppy.on('complete', (result) => {
    console.log('Upload complete! We&rsquo;ve uploaded these files:', result.successful)
})