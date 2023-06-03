import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}


export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrand = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const fetchDeviceslides = async () => {
    const {data} = await $host.get('api/deviceslides')
    return data
}


export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (page, limit) => {
    const {data} = await $host.get('api/device', {params: {
        page, limit

    }})
    return data
}
 
export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}


export const fetchSuite = async (page, limit) => {
    const {data} = await $host.get('api/suite', {params: {
        page, limit

    }})
    return data
}



export const createSuite = async (suite) => {
    const {data} = await $authHost.post('api/suite', suite)
    return data
}


export const fetchOneSuite = async (id) => {
    const {data} = await $host.get('api/suite/' + id)
    return data
} 