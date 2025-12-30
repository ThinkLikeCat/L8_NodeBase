exports.load = async function(url) {
    let siteInfo;
    let isLoading = true;
    let error = null;

    try {
        siteInfo = await fetch(url);
        isLoading = false;
    }
    catch(error) {
        error = new error("Ошибка, невозможно прочитать данные");
        isLoading = false;
    }

    return {siteInfo, isLoading, error};
} 