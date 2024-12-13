import React, { useState } from 'react'
import {
    List,
    GridColumn, Grid, Image,Segment, GridRow, Input,Icon, ButtonGroup, Button, ButtonOr, Divider, Header, Search,
    ListContent, ListItem, ListHeader, ListDescription, Pagination
  } from 'semantic-ui-react'
import AlbumList from './AlbumList';
import aud from '../../../audio/terranigma_crysta.mp3'
import AudioList from './AudioList';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import album from '../../../images/prabhupada.jpg'
import './audio.css'
function Audio() {
  const [tracks] = useState([
    { id: 1, desc: 'ft. Madhavas Rock Band',title: 'Mera Koi Na Sahara Bin Tere', url: 'https://rr2---sn-i5uif5t-cvhl.googlevideo.com/videoplayback?expire=1729971230&ei=vu8cZ6O6HLe46dsPncaP4AY&ip=176.5.131.59&id=o-AAxgayTBDESOhWlWMimC6a5lCGsY-zg82QhlGBUqnodk&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AQn3pFRCk_LAkFyDVDYaQnk-1jMwVcLI9DpSBf8OH-wHPawvY2xqcRjmu4UFtWkl1AvuVx5g1KdKVZyT&spc=qtApAccADXn2s7x7WLi1L3c7yI3EZqHVlBL305rdHLRsoG8QKQ&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=NsLUvrJKW10V-bL0oWCkVmwQ&rqh=1&gir=yes&clen=13121146&dur=810.701&lmt=1728857024039042&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350730,24350737,24350739,51312688,51326931&c=WEB&sefc=1&txp=5532434&n=AG2vWjYBLzU9pQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMOG2xV-V8A1oqEuYEJ7W2eluzKglIy0dc9xE-Ke7odDAiEAnXNeFEVRyHn_oGjYyHKa_TAgKagr7k3WCo4dT1lUlTU%3D&redirect_counter=1&rm=sn-i5hl77s&rrc=104&req_id=c26aa5d1c291a3ee&cms_redirect=yes&ipbypass=yes&met=1729949637,&mh=V1&mip=115.98.234.34&mm=31&mn=sn-i5uif5t-cvhl&ms=au&mt=1729949361&mv=m&mvi=2&pl=22&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhAMb5uUVj2sQ5ZlI945djbBqtdm04J4Ju2eGhppW4gW6EAiAMWtiLKmEWip_eG3ZksHbYwGArk9JQp9Cw0uW29EVi1Q%3D%3D' , play: false, album_art: 'https://c.saavncdn.com/125/Mera-Koi-Na-Sahara-Hindi-2023-20230502201808-500x500.jpg'},
    { id: 2, desc: 'Recorded in Lecture',title: 'Damodarashtakam', url: 'https://rr2---sn-npoe7nes.googlevideo.com/videoplayback?expire=1729972534&ei=1fQcZ46CO4rfi9oPpbqg6Qc&ip=176.1.226.2&id=o-ABMA9g579cUiwjoVXgwXMpB7h9WrG0GrEMGbj-B-rYXi&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFSmDRXF24CVCl4M0Gw7VuJeUOXdcK13lEgjFBe9cGCEVQ4Jr61MFLWXx840wPWNUtTyGPsZRN6d&spc=qtApAfA2SCCkyCC0E-A_iZA6inQmeGqbW3fbu5p0W4p2As9hmQ&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=QQ9IPg5p0155ORTNcH5ybsQQ&rqh=1&gir=yes&clen=12564914&dur=776.335&lmt=1729543167933116&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350730,24350737,24350739,51312688,51326932&c=WEB&sefc=1&txp=5318224&n=wo2tJbFs1PEfig&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgSvadEocU0bxWDz6pl9kiN2mwuYwP9AeWs4feir4nBqQCIQD3oyNyYYi3KueNb7711pRrOOmTdDZzZNUud8dlZKPYWQ%3D%3D&rm=sn-uxax4vopj5qx-q0n67l&rrc=79,80&req_id=13559a0f1e64a3ee&redirect_counter=2&cm2rm=sn-4g5eks76&cms_redirect=yes&cmsv=e&met=1729950939,&mh=1A&mip=115.98.234.34&mm=34&mn=sn-npoe7nes&ms=ltu&mt=1729950385&mv=u&mvi=2&pl=22&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRgIhALdhUPWB7X7pIemiNJdohxPE0hMFuQwMnMDKDFmLnVlbAiEAy5Gus5WQP-PCxXnwXuaJl7pVF5sVybF93EoaZdpibf0%3D' , play: false, album_art: 'https://i.ytimg.com/vi/OOO85Qi06c4/sddefault.jpg?v=65464749' },
    { id: 3, desc: 'ft. Madhavas Rock Band',title: 'Mere Deen Dayal', url: 'https://rr2---sn-aigl6nzs.googlevideo.com/videoplayback?expire=1729972693&ei=dfUcZ6rcC4OM6dsPnd7H0QY&ip=176.0.15.47&id=o-AAW-SuUcdFBKbqXFqbaQR8kftZHn1CojoBjMxLob_6uI&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFSO4bc2gb_yC71JnUCb_p7OHxlG8yLJCSvD3YpflWlzLXcv0M25hLa_mETjNLfR0BOJ_mnEmN4T&spc=qtApAQnHbppgVOJxDFFQWVLQWtHVefTNACi7uzktESn5bsYzmw&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=vXWbYftEmyzHI-f0SljWNQQQ&rqh=1&gir=yes&clen=9394454&dur=580.429&lmt=1727520469310020&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350729,24350737,24350740,51307728,51312688,51326931&c=WEB&sefc=1&txp=5532434&n=VxkI0dprtAFV2Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgMwAKI4GIXt10vVUqMD7RvbVNMEYxzBtUPfYn05lpQ6MCIQDCtO8r9Wtb61ywRuqymAiBelaAVKffiUzi37cthN5d7Q%3D%3D&rm=sn-uxax4vopj5qx-cxge7d,sn-4g5ezs76&rrc=79,104&req_id=2840692c41caa3ee&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1729951100,&mh=Ts&mip=115.98.234.34&mm=29&mn=sn-aigl6nzs&ms=rdu&mt=1729949768&mv=D&mvi=2&pl=0&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhANhmkeXxOOXlMDr92IWJvjAWhabdcZw0MKwvm2WLovBfAiBhp69x8lt8ojfWtn9Jh1apabD5NNFCkjNOupT-lPM7Lg%3D%3D' , play: false, album_art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f7/16/74/f71674a1-1ca2-93b4-3519-007699ce091f/198588158609.jpg/1200x1200bf-60.jpg'},
    { id: 1, desc: 'ft. Madhavas Rock Band',title: 'Mera Koi Na Sahara Bin Tere', url: 'https://rr2---sn-i5uif5t-cvhl.googlevideo.com/videoplayback?expire=1729971230&ei=vu8cZ6O6HLe46dsPncaP4AY&ip=176.5.131.59&id=o-AAxgayTBDESOhWlWMimC6a5lCGsY-zg82QhlGBUqnodk&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AQn3pFRCk_LAkFyDVDYaQnk-1jMwVcLI9DpSBf8OH-wHPawvY2xqcRjmu4UFtWkl1AvuVx5g1KdKVZyT&spc=qtApAccADXn2s7x7WLi1L3c7yI3EZqHVlBL305rdHLRsoG8QKQ&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=NsLUvrJKW10V-bL0oWCkVmwQ&rqh=1&gir=yes&clen=13121146&dur=810.701&lmt=1728857024039042&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350730,24350737,24350739,51312688,51326931&c=WEB&sefc=1&txp=5532434&n=AG2vWjYBLzU9pQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMOG2xV-V8A1oqEuYEJ7W2eluzKglIy0dc9xE-Ke7odDAiEAnXNeFEVRyHn_oGjYyHKa_TAgKagr7k3WCo4dT1lUlTU%3D&redirect_counter=1&rm=sn-i5hl77s&rrc=104&req_id=c26aa5d1c291a3ee&cms_redirect=yes&ipbypass=yes&met=1729949637,&mh=V1&mip=115.98.234.34&mm=31&mn=sn-i5uif5t-cvhl&ms=au&mt=1729949361&mv=m&mvi=2&pl=22&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhAMb5uUVj2sQ5ZlI945djbBqtdm04J4Ju2eGhppW4gW6EAiAMWtiLKmEWip_eG3ZksHbYwGArk9JQp9Cw0uW29EVi1Q%3D%3D' , play: false, album_art: 'https://c.saavncdn.com/125/Mera-Koi-Na-Sahara-Hindi-2023-20230502201808-500x500.jpg'},
    { id: 2, desc: 'Recorded in Lecture',title: 'Damodarashtakam', url: 'https://rr2---sn-npoe7nes.googlevideo.com/videoplayback?expire=1729972534&ei=1fQcZ46CO4rfi9oPpbqg6Qc&ip=176.1.226.2&id=o-ABMA9g579cUiwjoVXgwXMpB7h9WrG0GrEMGbj-B-rYXi&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFSmDRXF24CVCl4M0Gw7VuJeUOXdcK13lEgjFBe9cGCEVQ4Jr61MFLWXx840wPWNUtTyGPsZRN6d&spc=qtApAfA2SCCkyCC0E-A_iZA6inQmeGqbW3fbu5p0W4p2As9hmQ&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=QQ9IPg5p0155ORTNcH5ybsQQ&rqh=1&gir=yes&clen=12564914&dur=776.335&lmt=1729543167933116&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350730,24350737,24350739,51312688,51326932&c=WEB&sefc=1&txp=5318224&n=wo2tJbFs1PEfig&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgSvadEocU0bxWDz6pl9kiN2mwuYwP9AeWs4feir4nBqQCIQD3oyNyYYi3KueNb7711pRrOOmTdDZzZNUud8dlZKPYWQ%3D%3D&rm=sn-uxax4vopj5qx-q0n67l&rrc=79,80&req_id=13559a0f1e64a3ee&redirect_counter=2&cm2rm=sn-4g5eks76&cms_redirect=yes&cmsv=e&met=1729950939,&mh=1A&mip=115.98.234.34&mm=34&mn=sn-npoe7nes&ms=ltu&mt=1729950385&mv=u&mvi=2&pl=22&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRgIhALdhUPWB7X7pIemiNJdohxPE0hMFuQwMnMDKDFmLnVlbAiEAy5Gus5WQP-PCxXnwXuaJl7pVF5sVybF93EoaZdpibf0%3D' , play: false, album_art: 'https://i.ytimg.com/vi/OOO85Qi06c4/sddefault.jpg?v=65464749' },
    { id: 3, desc: 'ft. Madhavas Rock Band',title: 'Mere Deen Dayal', url: 'https://rr2---sn-aigl6nzs.googlevideo.com/videoplayback?expire=1729972693&ei=dfUcZ6rcC4OM6dsPnd7H0QY&ip=176.0.15.47&id=o-AAW-SuUcdFBKbqXFqbaQR8kftZHn1CojoBjMxLob_6uI&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFSO4bc2gb_yC71JnUCb_p7OHxlG8yLJCSvD3YpflWlzLXcv0M25hLa_mETjNLfR0BOJ_mnEmN4T&spc=qtApAQnHbppgVOJxDFFQWVLQWtHVefTNACi7uzktESn5bsYzmw&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=vXWbYftEmyzHI-f0SljWNQQQ&rqh=1&gir=yes&clen=9394454&dur=580.429&lmt=1727520469310020&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350729,24350737,24350740,51307728,51312688,51326931&c=WEB&sefc=1&txp=5532434&n=VxkI0dprtAFV2Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgMwAKI4GIXt10vVUqMD7RvbVNMEYxzBtUPfYn05lpQ6MCIQDCtO8r9Wtb61ywRuqymAiBelaAVKffiUzi37cthN5d7Q%3D%3D&rm=sn-uxax4vopj5qx-cxge7d,sn-4g5ezs76&rrc=79,104&req_id=2840692c41caa3ee&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1729951100,&mh=Ts&mip=115.98.234.34&mm=29&mn=sn-aigl6nzs&ms=rdu&mt=1729949768&mv=D&mvi=2&pl=0&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhANhmkeXxOOXlMDr92IWJvjAWhabdcZw0MKwvm2WLovBfAiBhp69x8lt8ojfWtn9Jh1apabD5NNFCkjNOupT-lPM7Lg%3D%3D' , play: false, album_art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f7/16/74/f71674a1-1ca2-93b4-3519-007699ce091f/198588158609.jpg/1200x1200bf-60.jpg'},
    { id: 1, desc: 'ft. Madhavas Rock Band',title: 'Mera Koi Na Sahara Bin Tere', url: 'https://rr2---sn-i5uif5t-cvhl.googlevideo.com/videoplayback?expire=1729971230&ei=vu8cZ6O6HLe46dsPncaP4AY&ip=176.5.131.59&id=o-AAxgayTBDESOhWlWMimC6a5lCGsY-zg82QhlGBUqnodk&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AQn3pFRCk_LAkFyDVDYaQnk-1jMwVcLI9DpSBf8OH-wHPawvY2xqcRjmu4UFtWkl1AvuVx5g1KdKVZyT&spc=qtApAccADXn2s7x7WLi1L3c7yI3EZqHVlBL305rdHLRsoG8QKQ&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=NsLUvrJKW10V-bL0oWCkVmwQ&rqh=1&gir=yes&clen=13121146&dur=810.701&lmt=1728857024039042&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350730,24350737,24350739,51312688,51326931&c=WEB&sefc=1&txp=5532434&n=AG2vWjYBLzU9pQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMOG2xV-V8A1oqEuYEJ7W2eluzKglIy0dc9xE-Ke7odDAiEAnXNeFEVRyHn_oGjYyHKa_TAgKagr7k3WCo4dT1lUlTU%3D&redirect_counter=1&rm=sn-i5hl77s&rrc=104&req_id=c26aa5d1c291a3ee&cms_redirect=yes&ipbypass=yes&met=1729949637,&mh=V1&mip=115.98.234.34&mm=31&mn=sn-i5uif5t-cvhl&ms=au&mt=1729949361&mv=m&mvi=2&pl=22&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhAMb5uUVj2sQ5ZlI945djbBqtdm04J4Ju2eGhppW4gW6EAiAMWtiLKmEWip_eG3ZksHbYwGArk9JQp9Cw0uW29EVi1Q%3D%3D' , play: false, album_art: 'https://c.saavncdn.com/125/Mera-Koi-Na-Sahara-Hindi-2023-20230502201808-500x500.jpg'},
    { id: 2, desc: 'Recorded in Lecture',title: 'Damodarashtakam', url: 'https://rr2---sn-npoe7nes.googlevideo.com/videoplayback?expire=1729972534&ei=1fQcZ46CO4rfi9oPpbqg6Qc&ip=176.1.226.2&id=o-ABMA9g579cUiwjoVXgwXMpB7h9WrG0GrEMGbj-B-rYXi&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFSmDRXF24CVCl4M0Gw7VuJeUOXdcK13lEgjFBe9cGCEVQ4Jr61MFLWXx840wPWNUtTyGPsZRN6d&spc=qtApAfA2SCCkyCC0E-A_iZA6inQmeGqbW3fbu5p0W4p2As9hmQ&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=QQ9IPg5p0155ORTNcH5ybsQQ&rqh=1&gir=yes&clen=12564914&dur=776.335&lmt=1729543167933116&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350730,24350737,24350739,51312688,51326932&c=WEB&sefc=1&txp=5318224&n=wo2tJbFs1PEfig&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgSvadEocU0bxWDz6pl9kiN2mwuYwP9AeWs4feir4nBqQCIQD3oyNyYYi3KueNb7711pRrOOmTdDZzZNUud8dlZKPYWQ%3D%3D&rm=sn-uxax4vopj5qx-q0n67l&rrc=79,80&req_id=13559a0f1e64a3ee&redirect_counter=2&cm2rm=sn-4g5eks76&cms_redirect=yes&cmsv=e&met=1729950939,&mh=1A&mip=115.98.234.34&mm=34&mn=sn-npoe7nes&ms=ltu&mt=1729950385&mv=u&mvi=2&pl=22&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRgIhALdhUPWB7X7pIemiNJdohxPE0hMFuQwMnMDKDFmLnVlbAiEAy5Gus5WQP-PCxXnwXuaJl7pVF5sVybF93EoaZdpibf0%3D' , play: false, album_art: 'https://i.ytimg.com/vi/OOO85Qi06c4/sddefault.jpg?v=65464749' },
    { id: 3, desc: 'ft. Madhavas Rock Band',title: 'Mere Deen Dayal', url: 'https://rr2---sn-aigl6nzs.googlevideo.com/videoplayback?expire=1729972693&ei=dfUcZ6rcC4OM6dsPnd7H0QY&ip=176.0.15.47&id=o-AAW-SuUcdFBKbqXFqbaQR8kftZHn1CojoBjMxLob_6uI&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFSO4bc2gb_yC71JnUCb_p7OHxlG8yLJCSvD3YpflWlzLXcv0M25hLa_mETjNLfR0BOJ_mnEmN4T&spc=qtApAQnHbppgVOJxDFFQWVLQWtHVefTNACi7uzktESn5bsYzmw&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=vXWbYftEmyzHI-f0SljWNQQQ&rqh=1&gir=yes&clen=9394454&dur=580.429&lmt=1727520469310020&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350729,24350737,24350740,51307728,51312688,51326931&c=WEB&sefc=1&txp=5532434&n=VxkI0dprtAFV2Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgMwAKI4GIXt10vVUqMD7RvbVNMEYxzBtUPfYn05lpQ6MCIQDCtO8r9Wtb61ywRuqymAiBelaAVKffiUzi37cthN5d7Q%3D%3D&rm=sn-uxax4vopj5qx-cxge7d,sn-4g5ezs76&rrc=79,104&req_id=2840692c41caa3ee&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1729951100,&mh=Ts&mip=115.98.234.34&mm=29&mn=sn-aigl6nzs&ms=rdu&mt=1729949768&mv=D&mvi=2&pl=0&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhANhmkeXxOOXlMDr92IWJvjAWhabdcZw0MKwvm2WLovBfAiBhp69x8lt8ojfWtn9Jh1apabD5NNFCkjNOupT-lPM7Lg%3D%3D' , play: false, album_art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f7/16/74/f71674a1-1ca2-93b4-3519-007699ce091f/198588158609.jpg/1200x1200bf-60.jpg'},
    { id: 1, desc: 'ft. Madhavas Rock Band',title: 'Mera Koi Na Sahara Bin Tere', url: 'https://rr2---sn-i5uif5t-cvhl.googlevideo.com/videoplayback?expire=1729971230&ei=vu8cZ6O6HLe46dsPncaP4AY&ip=176.5.131.59&id=o-AAxgayTBDESOhWlWMimC6a5lCGsY-zg82QhlGBUqnodk&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AQn3pFRCk_LAkFyDVDYaQnk-1jMwVcLI9DpSBf8OH-wHPawvY2xqcRjmu4UFtWkl1AvuVx5g1KdKVZyT&spc=qtApAccADXn2s7x7WLi1L3c7yI3EZqHVlBL305rdHLRsoG8QKQ&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=NsLUvrJKW10V-bL0oWCkVmwQ&rqh=1&gir=yes&clen=13121146&dur=810.701&lmt=1728857024039042&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350730,24350737,24350739,51312688,51326931&c=WEB&sefc=1&txp=5532434&n=AG2vWjYBLzU9pQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAMOG2xV-V8A1oqEuYEJ7W2eluzKglIy0dc9xE-Ke7odDAiEAnXNeFEVRyHn_oGjYyHKa_TAgKagr7k3WCo4dT1lUlTU%3D&redirect_counter=1&rm=sn-i5hl77s&rrc=104&req_id=c26aa5d1c291a3ee&cms_redirect=yes&ipbypass=yes&met=1729949637,&mh=V1&mip=115.98.234.34&mm=31&mn=sn-i5uif5t-cvhl&ms=au&mt=1729949361&mv=m&mvi=2&pl=22&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhAMb5uUVj2sQ5ZlI945djbBqtdm04J4Ju2eGhppW4gW6EAiAMWtiLKmEWip_eG3ZksHbYwGArk9JQp9Cw0uW29EVi1Q%3D%3D' , play: false, album_art: 'https://c.saavncdn.com/125/Mera-Koi-Na-Sahara-Hindi-2023-20230502201808-500x500.jpg'},
    { id: 2, desc: 'Recorded in Lecture',title: 'Damodarashtakam', url: 'https://rr2---sn-npoe7nes.googlevideo.com/videoplayback?expire=1729972534&ei=1fQcZ46CO4rfi9oPpbqg6Qc&ip=176.1.226.2&id=o-ABMA9g579cUiwjoVXgwXMpB7h9WrG0GrEMGbj-B-rYXi&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFSmDRXF24CVCl4M0Gw7VuJeUOXdcK13lEgjFBe9cGCEVQ4Jr61MFLWXx840wPWNUtTyGPsZRN6d&spc=qtApAfA2SCCkyCC0E-A_iZA6inQmeGqbW3fbu5p0W4p2As9hmQ&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=QQ9IPg5p0155ORTNcH5ybsQQ&rqh=1&gir=yes&clen=12564914&dur=776.335&lmt=1729543167933116&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350730,24350737,24350739,51312688,51326932&c=WEB&sefc=1&txp=5318224&n=wo2tJbFs1PEfig&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgSvadEocU0bxWDz6pl9kiN2mwuYwP9AeWs4feir4nBqQCIQD3oyNyYYi3KueNb7711pRrOOmTdDZzZNUud8dlZKPYWQ%3D%3D&rm=sn-uxax4vopj5qx-q0n67l&rrc=79,80&req_id=13559a0f1e64a3ee&redirect_counter=2&cm2rm=sn-4g5eks76&cms_redirect=yes&cmsv=e&met=1729950939,&mh=1A&mip=115.98.234.34&mm=34&mn=sn-npoe7nes&ms=ltu&mt=1729950385&mv=u&mvi=2&pl=22&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRgIhALdhUPWB7X7pIemiNJdohxPE0hMFuQwMnMDKDFmLnVlbAiEAy5Gus5WQP-PCxXnwXuaJl7pVF5sVybF93EoaZdpibf0%3D' , play: false, album_art: 'https://i.ytimg.com/vi/OOO85Qi06c4/sddefault.jpg?v=65464749' },
    { id: 3, desc: 'ft. Madhavas Rock Band',title: 'Mere Deen Dayal', url: 'https://rr2---sn-aigl6nzs.googlevideo.com/videoplayback?expire=1729972693&ei=dfUcZ6rcC4OM6dsPnd7H0QY&ip=176.0.15.47&id=o-AAW-SuUcdFBKbqXFqbaQR8kftZHn1CojoBjMxLob_6uI&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFSO4bc2gb_yC71JnUCb_p7OHxlG8yLJCSvD3YpflWlzLXcv0M25hLa_mETjNLfR0BOJ_mnEmN4T&spc=qtApAQnHbppgVOJxDFFQWVLQWtHVefTNACi7uzktESn5bsYzmw&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=vXWbYftEmyzHI-f0SljWNQQQ&rqh=1&gir=yes&clen=9394454&dur=580.429&lmt=1727520469310020&keepalive=yes&fexp=24350590,24350655,24350675,24350705,24350729,24350737,24350740,51307728,51312688,51326931&c=WEB&sefc=1&txp=5532434&n=VxkI0dprtAFV2Q&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgMwAKI4GIXt10vVUqMD7RvbVNMEYxzBtUPfYn05lpQ6MCIQDCtO8r9Wtb61ywRuqymAiBelaAVKffiUzi37cthN5d7Q%3D%3D&rm=sn-uxax4vopj5qx-cxge7d,sn-4g5ezs76&rrc=79,104&req_id=2840692c41caa3ee&rms=rdu,au&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&met=1729951100,&mh=Ts&mip=115.98.234.34&mm=29&mn=sn-aigl6nzs&ms=rdu&mt=1729949768&mv=D&mvi=2&pl=0&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=ACJ0pHgwRQIhANhmkeXxOOXlMDr92IWJvjAWhabdcZw0MKwvm2WLovBfAiBhp69x8lt8ojfWtn9Jh1apabD5NNFCkjNOupT-lPM7Lg%3D%3D' , play: false, album_art: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f7/16/74/f71674a1-1ca2-93b4-3519-007699ce091f/198588158609.jpg/1200x1200bf-60.jpg'},
  ]);

  return (
    <>
    <Segment basic>
    <Grid doubling relaxed columns={4}>
    {tracks && tracks.map((track, index) => 
        <AlbumList key={index} props={track} trackid={index} />
      )}
    </Grid>
    </Segment>
    </>
  )
}

export default Audio