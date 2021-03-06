import React from 'react';
import { connect } from 'react-redux';
import tileStyle from './tile.module.css';
import img_cdl from '../assets/cdl.png';
import img_cdu from '../assets/cdu.png';
import img_cdr from '../assets/cdr.png';
import img_cur from '../assets/cur.png';
import img_cud from '../assets/cud.png';
import img_cul from '../assets/cul.png';
import img_clu from '../assets/clu.png';
import img_clr from '../assets/clr.png';
import img_cld from '../assets/cld.png';
import img_crd from '../assets/crd.png';
import img_crl from '../assets/crl.png';
import img_cru from '../assets/cru.png';
import img_ddl from '../assets/ddl.png';
import img_ddu from '../assets/ddu.png';
import img_ddr from '../assets/ddr.png';
import img_dur from '../assets/dur.png';
import img_dud from '../assets/dud.png';
import img_dul from '../assets/dul.png';
import img_dlu from '../assets/dlu.png';
import img_dlr from '../assets/dlr.png';
import img_dld from '../assets/dld.png';
import img_drd from '../assets/drd.png';
import img_drl from '../assets/drl.png';
import img_dru from '../assets/dru.png';
import img_sdl from '../assets/sdl.png';
import img_sdu from '../assets/sdu.png';
import img_sdr from '../assets/sdr.png';
import img_sur from '../assets/sur.png';
import img_sud from '../assets/sud.png';
import img_sul from '../assets/sul.png';
import img_slu from '../assets/slu.png';
import img_slr from '../assets/slr.png';
import img_sld from '../assets/sld.png';
import img_srd from '../assets/srd.png';
import img_srl from '../assets/srl.png';
import img_sru from '../assets/sru.png';
import img_empty from '../assets/empty_tile.png';
import img_cat01 from '../assets/go01.png';
import img_cat02 from '../assets/go02.png';
import img_cat03 from '../assets/go03.png';
import img_cat04 from '../assets/go04.png';
import img_cat05 from '../assets/go05.png';
import img_cat06 from '../assets/go06.png';
import img_cat07 from '../assets/go07.png';
import img_cat08 from '../assets/go08.png';
import img_cat09 from '../assets/go09.png';
import img_cat10 from '../assets/go10.png';
import img_cat11 from '../assets/go11.png';
import img_cat12 from '../assets/go12.png';
import img_dog from '../assets/dog.png';
import img_doge from '../assets/doge.gif';
import img_dogi from '../assets/dogi.gif';
import img_dogc from '../assets/dogc.gif';
import img_squ from '../assets/squ.png';
import img_sque from '../assets/sque.gif';
import img_squee from '../assets/squee.png';
import img_squc from '../assets/squc.gif';
import img_tri from '../assets/tri.png';
import img_trie from '../assets/trie.gif';
import img_tric from '../assets/tric.gif';
import img_trice from '../assets/trice.png';
import img_mou from '../assets/mou.png';
import img_bed1 from '../assets/bed1.png';
import img_bed2 from '../assets/bed2.png';
import img_bed3 from '../assets/bed3.png';
import img_bed4 from '../assets/bed4.png';
import img_xc from '../assets/xc.png';
import img_xd from '../assets/xd.png';
import img_xs from '../assets/xs.png';
import img_xcd from '../assets/xcd.png';
import img_xcs from '../assets/xcs.png';
import img_xds from '../assets/xds.png';
import img_xcds from '../assets/xcds.png';

const getImage = (image) => {
    switch(image) {
        case "cdl": return img_cdl;
        case "cdu": return img_cdu;
        case "cdr": return img_cdr;
        case "cur": return img_cur;
        case "cud": return img_cud;
        case "cul": return img_cul;
        case "clu": return img_clu;
        case "clr": return img_clr;
        case "cld": return img_cld;
        case "crd": return img_crd;
        case "crl": return img_crl;
        case "cru": return img_cru;
        case "ddl": return img_ddl;
        case "ddu": return img_ddu;
        case "ddr": return img_ddr;
        case "dur": return img_dur;
        case "dud": return img_dud;
        case "dul": return img_dul;
        case "dlu": return img_dlu;
        case "dlr": return img_dlr;
        case "dld": return img_dld;
        case "drd": return img_drd;
        case "drl": return img_drl;
        case "dru": return img_dru;
        case "sdl": return img_sdl;
        case "sdu": return img_sdu;
        case "sdr": return img_sdr;
        case "sur": return img_sur;
        case "sud": return img_sud;
        case "sul": return img_sul;
        case "slu": return img_slu;
        case "slr": return img_slr;
        case "sld": return img_sld;
        case "srd": return img_srd;
        case "srl": return img_srl;
        case "sru": return img_sru;
        case "empty": return img_empty;
        case "cat1": return img_cat01;
        case "cat2": return img_cat02;
        case "cat3": return img_cat03;
        case "cat4": return img_cat04;
        case "cat5": return img_cat05;
        case "cat6": return img_cat06;
        case "cat7": return img_cat07;
        case "cat8": return img_cat08;
        case "cat9": return img_cat09;
        case "cat10": return img_cat10;
        case "cat11": return img_cat11;
        case "cat12": return img_cat12;
        case "dog": return img_dog;
        case "doge": return img_doge;
        case "dogi": return img_dogi;
        case "dogc": return img_dogc;
        case "squ": return img_squ;
        case "sque": return img_sque;
        case "squee": return img_squee;
        case "squc": return img_squc;
        case "tri": return img_tri;
        case "trie": return img_trie;
        case "tric": return img_tric;
        case "trice": return img_trice;
        case "mou": return img_mou;
        case "bed1": return img_bed1;
        case "bed2": return img_bed2;
        case "bed3": return img_bed3;
        case "bed4": return img_bed4;
        case "xc": return img_xc;
        case "xd": return img_xd;
        case "xs": return img_xs;
        case "xcd": return img_xcd;
        case "xcs": return img_xcs;
        case "xds": return img_xds;
        case "xcds": return img_xcds;
        default: return img_empty;
    }
};

const Tile = (props) => {
    if (!props.image) {
        return <div>Loading...</div>
    }
    let imageType = '';
    if (props.image.length > 5) {
        const animals = [];
        for (let i=0; i<props.image.length; i+=3) {
            if (!animals.includes(props.image.charAt(i))) {
                animals.push(props.image.charAt(i));
            }           
        }
        animals.sort();
        imageType = 'x';
        for (let i=0; i<animals.length; i++) {
            imageType += animals[i];
        }
        imageType = getImage(imageType);
    } else {
        imageType = getImage(props.image);
    }    
    return (
        <div key={props.x + " " + props.y} onClick={() => props.tileClick(props)}>
            <img className={tileStyle.image + " " + (props.z ? tileStyle.visible : tileStyle.hidden)} src={imageType} alt="tile"/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        boardZ: state.boardZ,
        annoyance: state.annoyance,
        tiredness: state.tiredness,
        clicksLeft: state.clicksLeft,
        gameOverInProgress: state.gameOverInProgress
    }
}
 
export default connect(mapStateToProps)(Tile);