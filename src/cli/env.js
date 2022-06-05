export const parseEnv = () => {
    const envPrefix = 'RSS_';
    const rssKeys = Object.keys(process.env).filter(x => x.indexOf(envPrefix) !== -1)
    const res = rssKeys.map(x => `${x}=${process.env[x]}`).join('; ');

    console.log(res)
};

// parseEnv()
