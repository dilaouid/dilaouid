export const preloadCriticalResources = () => {
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = '/fonts/inter-var.woff2';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);

    const imagePreload = document.createElement('link');
    imagePreload.rel = 'preload';
    imagePreload.href = '/images/avatar.jpg';
    imagePreload.as = 'image';
    document.head.appendChild(imagePreload);
};