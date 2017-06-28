import http from 'http';
import {resolve} from 'path';
import fs from 'fs';
import url from 'url';
import querystring from 'querystring'
import axios from 'axios';
import keymirror from 'keymirror';
import getmac from 'getmac';

const authAPI = "http://API.slyak.com/auth";
export const StoreConstants = keymirror({
    TOKEN: null,
    PAC: null
});

const storeData = ({token, pac}) => {

};

const PORTS = {
    API: 10601,
    HTTP_PROXY: 10602,
    SOCKS5_PROXY: 10603
};

const getEquipmentId = () => {
    getmac.getMac((err, macAddress) => {

    })
};

const configureAuth = () => {
    return {
        eid: getEquipmentId(),
        token: ''
    }
};

const createApiServer = () => {
    http.createServer((request, response) => {
        request.url
    }).listen(PORTS.API);
};

const createHttpProxyServer = () => {
    http.createServer((request, response) => {
        const req = http.request({
            port: PORTS.HTTP_PROXY,
            path: request.url,
            method: request.method,
        }, function (req, res) {
            res.pipe(response);
        }).end()
    }).listen(PORTS.HTTP_PROXY);
};

const createSocks5ProxyServer = () => {

};

export const start = () => {
    axios.post(authAPI, configureAuth()).then(res => {
        storeData(res.data);
        createApiServer();
        createHttpProxyServer();
        createSocks5ProxyServer();
    });
};

export const stop = () => {

};