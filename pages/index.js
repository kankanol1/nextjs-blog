/*https://www.nextjs.cn/learn/basics/create-nextjs-app/editing-the-page*/

import React from 'react';
import Grid from '@material-ui/core/Grid';

import Layout from "./components/layout";
import Item from  './components/item/index'

export default function Home(props) {
  const {data} = props;
  return (
      <Layout home>
        <Grid container spacing={1}>
          {data.map((i,k)=> <Item key={k} data={i}/>)}
        </Grid>
      </Layout>
  )
}

export async function getStaticProps() {
  const context = "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.";
  // img 路径拼接
  const img="https://image.baidu.com/search/acjson?tn=resultjson_com&logid=8607666919302990327&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E6%99%AF%E8%89%B2%E5%9B%BE%E7%89%87&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&word=%E6%99%AF%E8%89%B2%E5%9B%BE%E7%89%87&s=&se=&tab=&width=&height=&face=0&istype=2&expermode=&force=&pn=10";
  const res = await fetch(img)
  const imgs = await res.json();
  let data = [
    {id:1,context:context,label:'LY',http:'https',date:'2019-11.23',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '临沂市渣土车',href:'/', img:imgs},
    {id:2,context:context,label:'DY',http:'https',date:'2019-06.12',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '东营筑网栖息地',href:'/',img:img},
    {id:3,context:context,label:'LY',http:'https',date:'2016-05.06',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '临沂人车伴随系统',href:'/',img:img},
    {id:4,context:context,label:'JN',http:'https',date:'2012-07.23',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '济南交警平台',href:'/', img:img},
    {id:4,context:context,label:'JN',http:'https',date:'2012-07.23',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '济南交警平台',href:'/', img:img},
    {id:4,context:context,label:'JN',http:'https',date:'2012-07.23',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '济南交警平台',href:'/', img:img},
    {id:4,context:context,label:'JN',http:'https',date:'2012-07.23',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '济南交警平台',href:'/', img:img},
    {id:4,context:context,label:'JN',http:'https',date:'2012-07.23',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '济南交警平台',href:'/', img:"https://uploadbeta.com/api/pictures/random/"},
    {id:4,context:context,label:'JN',http:'https',date:'2012-07.23',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '济南交警平台',href:'/', img:"https://uploadbeta.com/api/pictures/random/"},
    {id:4,context:context,label:'JN',http:'https',date:'2012-07.23',inip:'192.168.1.23',outip:'105.214.23.45',outport: 2342,inport:2323,name: '济南交警平台',href:'/', img:"https://bing.ioliu.cn/v1/rand"},
  ]
  data = data.map((i,k)=>{
    return {
      ...i,
      img: imgs.data[k].thumbURL
  }
  })
  return {props: {data}}
}

