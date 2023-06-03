import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._brands = [

        ]

        this._types = []

        this._devices = []

        this._suites = []

        
        this._deviceslides = []
          
        
        this._selectedSuites = {}
        this._selectedDevices = {}
        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedDeviceslides = {}

        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setsuites(suites) {
        this._suites = suites
    }


     setDeviceslides(deviceslides) {
        this._deviceslides = deviceslides
    }
    setBrands(brands) {
        this._brands = brands
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedDeviceslides(deviceslides) {
        this._selectedDeviceslide = deviceslides
    }

    setSelectedDevice(devices) {
        this._selectedDevices = devices
    }
    setSelectedSuite(suites) {
        this._selectedDevices = suites
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get suites() {
        return this._suites
    }
    get types() {
        return this._types
    }
    get devices() {
        return this._devices
    }

    get deviceslides() {
        return this._deviceslides
    }

    get brands() {
        return this._brands
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedSuite() {
        return this._selectedSuites
    }
    get setSelectedDevices() {
        return  this._selectedDevices
    }

    get setSelectedDeviceslides() {
        return  this._selectedDeviceslides
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }
    
    get limit() {
        return this._limit
    }

    get selectedBrand() {
        return this._selectedBrand
    }



    get selectedDeviceslides() {
        return this._selectedDeviceslides
    }

}
