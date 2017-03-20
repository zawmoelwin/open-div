$( document ).ready(function() {
  autoComplete();
});

var autoComplete = function(){

  var $project = $('#autocomplete-input');

  var projects = [ { label:'VoiLaw' ,icon: 'http://public.crunchbase.com/t_api_images/v1477650628/dma2pm1hbrkupdnuqpa1.png' },
  { label:'Reesorz.com' ,icon: 'http://public.crunchbase.com/t_api_images/v1477963776/t9gktlnczmxfoigrzrk9.png' },
  { label:'Pionyr Immunotherapeutics' ,icon: 'http://public.crunchbase.com/t_api_images/v1483601591/mcwqqvlyygzw5fdz8mdq.png' },
  { label:'Piper' ,icon: 'http://public.crunchbase.com/t_api_images/v1485426419/sysiwiqw6s4nxb0bjypj.png' },
  { label:'Ironqloud' ,icon: 'http://public.crunchbase.com/t_api_images/v1477550652/xefbdii03c0tivu1mxfu.png' },
  { label:'Sense Strategies' ,icon: 'http://public.crunchbase.com/t_api_images/v1484002838/rl7mhjf9ntcjy4blvilc.png' },
  { label:'Green Bay Advisors' ,icon: 'http://public.crunchbase.com/t_api_images/v1481509442/eerttcfgarsakcn9mpp0.png' },
  { label:'Cyantag' ,icon: 'http://public.crunchbase.com/t_api_images/v1478084492/zjd6ik0qucfdfrgpjpia.png' },
  { label:'Songstream' ,icon: 'http://public.crunchbase.com/t_api_images/v1483989242/rzg0me57rgq6g2eqh5zr.png' },
  { label:'Voxility' ,icon: 'http://public.crunchbase.com/t_api_images/v1478767988/uw0yfxvixxtd82oh376t.jpg' },
  { label:'Filament Hospitality' ,icon: 'http://public.crunchbase.com/t_api_images/v1478295499/kpmoz7ivjqsjmwrpywdz.png' },
  { label:'DiveIn' ,icon: 'http://public.crunchbase.com/t_api_images/v1485459038/g6ugkczyhkxanyrsw3uk.png' },
  { label:'Astranis' ,icon: 'http://public.crunchbase.com/t_api_images/v1485594342/qxgrm1kraacmbscajgjr.png' },
  { label:'DxRx Medical' ,icon: 'http://public.crunchbase.com/t_api_images/v1485249651/nhpvjbmgfl1ucmwuarzi.png' },
  { label:'VQuick' ,icon: 'http://public.crunchbase.com/t_api_images/v1485928296/nno2cej2mcatvwewta3t.png' },
  { label:'I-Impact' ,icon: 'http://public.crunchbase.com/t_api_images/v1479547988/ujngxuwguwrs6t703ens.png' },
  { label:'UXBio' ,icon: 'http://public.crunchbase.com/t_api_images/v1481866490/bnctzu13dk0boniguwxt.png' },
  { label:'LunchBadger, Inc.' ,icon: 'http://public.crunchbase.com/t_api_images/v1479443040/zxpm8gndlfy6gkvouqts.png' },
  { label:'Rubuz' ,icon: 'http://public.crunchbase.com/t_api_images/v1483423389/neihhoziaaxysmf7iqjj.png' },
  { label:'Chimera Bioengineering' ,icon: 'http://public.crunchbase.com/t_api_images/v1480325741/lpq7uk4zk88dyibkybg8.png' },
  { label:'Fact0ry X' ,icon: 'http://public.crunchbase.com/t_api_images/v1477544354/lewa0ked2p1lz5xfzgdq.png' },
  { label:'Narrow Blue' ,icon: 'http://public.crunchbase.com/t_api_images/v1480525259/lqxbsqak7hs9wpxem4tv.png' },
  { label:'The Beans' ,icon: 'http://public.crunchbase.com/t_api_images/v1483633683/xq4b7si6bdcr67zzubin.png' },
  { label:'NimbusMart' ,icon: 'http://public.crunchbase.com/t_api_images/v1486454352/hlwjs3998hceopfvhjhf.jpg' },
  { label:'SPROKIT' ,icon: 'http://public.crunchbase.com/t_api_images/v1478664383/vflmpnh5pqzzehnswfrz.png' },
  { label:'Linqto' ,icon: 'http://public.crunchbase.com/t_api_images/v1488581692/ob6wboifrhzksz9ov5ys.png' },
  { label:'Bestlaw' ,icon: 'http://public.crunchbase.com/t_api_images/v1477793970/fwlnkgxle277fip63rer.png' },
  { label:'Bluetree Legal Connect' ,icon: 'http://public.crunchbase.com/t_api_images/v1477641108/ikilrzbyequksyaux5wl.png' },
  { label:'Catalog Technologies' ,icon: 'http://public.crunchbase.com/t_api_images/v1483783824/cc7o2jqrb1vj0igl0qnl.png' },
  { label:'FLYE' ,icon: 'http://public.crunchbase.com/t_api_images/v1486691606/gffyhbxpccapccxpvrqx.png' },
  { label:'Shobu' ,icon: 'http://public.crunchbase.com/t_api_images/v1478570076/immrcexi8phnzlzku8te.jpg' },
  { label:'Credit Swarm' ,icon: '' },
  { label:'Fuel' ,icon: 'http://public.crunchbase.com/t_api_images/v1482489700/yylcgqlgbbfhsjpuvww5.png' },
  { label:'Marketfox' ,icon: 'http://public.crunchbase.com/t_api_images/v1486021237/jstyx6cymns81p4qy0kr.png' },
  { label:'Gram Health' ,icon: 'http://public.crunchbase.com/t_api_images/v1484117517/tyfzhcszxqf8hpnqwgmq.png' },
  { label:'Dot Labs' ,icon: 'http://public.crunchbase.com/t_api_images/v1481109263/t3mmblbuqaldg3q1le4k.png' },
  { label:'Presence AI' ,icon: 'http://public.crunchbase.com/t_api_images/v1484732781/hnsokoh3aifwmpldog1x.png' },
  { label:'Virta' ,icon: 'http://public.crunchbase.com/t_api_images/v1484615627/ldqyqlkn90e7ktjucaxy.png' },
  { label:'uTapp LLC' ,icon: 'http://public.crunchbase.com/t_api_images/v1485711217/xdji0loe67gou55tszuz.png' },
  { label:'Sonar Technologies' ,icon: 'http://public.crunchbase.com/t_api_images/v1483683480/y3zc283fw5f0opx8jqoy.png' },
  { label:'Wheelhouse' ,icon: 'http://public.crunchbase.com/t_api_images/v1481329468/gjwzeidebyackd0iqyjz.png' },
  { label:'Zenplace' ,icon: 'http://public.crunchbase.com/t_api_images/v1484620402/iw6xa6yhmyusoeodotii.png' },
  { label:'GEA Enzymes' ,icon: 'http://public.crunchbase.com/t_api_images/v1479212638/qgdlcsuplfprwuk9kxpt.png' },
  { label:'GameBots' ,icon: 'http://public.crunchbase.com/t_api_images/v1485593379/zirwfivz7jc0guuvxqlb.png' },
  { label:'After I Go' ,icon: 'http://public.crunchbase.com/t_api_images/v1477628093/czvpdfcygvm9bvv66f2e.png' },
  { label:'AptoZen' ,icon: 'http://public.crunchbase.com/t_api_images/v1479771257/bu0pzgmbkcesd0usssdi.png' },
  { label:'Champify' ,icon: 'http://public.crunchbase.com/t_api_images/v1478305881/v20smjzngtlreudazi3d.png' },
  { label:'Day Digital' ,icon: 'http://public.crunchbase.com/t_api_images/v1485447615/lnczlf9fi5outwztdybf.jpg' },
  { label:'SpoG' ,icon: 'http://public.crunchbase.com/t_api_images/v1478376012/vcbckvi4kps83wrb1gow.png' },
  { label:'FutureModel' ,icon: '' },
  { label:'Workpuls' ,icon: 'http://public.crunchbase.com/t_api_images/v1480239750/tfvqgq6xcwcnfn1e1qhp.png' },
  { label:'VenomYx' ,icon: 'http://public.crunchbase.com/t_api_images/v1479216055/jxgc1hi2nxdehzuukaiv.png' },
  { label:'Wearable IoT World' ,icon: 'http://public.crunchbase.com/t_api_images/v1483682778/xttsfzmeyblqzfvxcetp.png' },
  { label:'Sigma' ,icon: 'http://public.crunchbase.com/t_api_images/v1484941307/pa1rqjcpwbydztbeoabr.png' },
  { label:'BetterUp' ,icon: 'http://public.crunchbase.com/t_api_images/v1479355890/mebnxxr9q8oeatvqbdp1.png' },
  { label:'Shogun' ,icon: 'http://public.crunchbase.com/t_api_images/v1478547179/um6vqduyorzhzvpecxf6.png' },
  { label:'Windfall Data' ,icon: 'http://public.crunchbase.com/t_api_images/v1485754963/lb0dwayi95t4ke5vmmqb.png' },
  { label:'Targeto Inc' ,icon: '' },
  { label:'Impossible Labs' ,icon: 'http://public.crunchbase.com/t_api_images/v1483310598/jcqcsx5xdj6rcyauwsfq.png' },
  { label:'Exalt Groupe Inc' ,icon: 'http://public.crunchbase.com/t_api_images/v1477531872/fjmy0ysfylusu2fzsxjs.png' },
  { label:'Pakia Software Services LLC' ,icon: 'http://public.crunchbase.com/t_api_images/v1484306974/h28dfuekwyffovptjudh.jpg' },
  { label:'Lexiqual' ,icon: 'http://public.crunchbase.com/t_api_images/v1477655452/anovqkypkuhduv2xfmju.png' },
  { label:'Turo' ,icon: 'http://public.crunchbase.com/t_api_images/v1480626107/klj0atxdbdk3ermzcz3q.png' },
  { label:'ViaeX' ,icon: 'http://public.crunchbase.com/t_api_images/v1479213159/qks6ml2amzfoybagf8lr.png' },
  { label:'OneClick Ship' ,icon: '' },
  { label:'EoExchange' ,icon: '' },
  { label:'SkipFlag' ,icon: 'http://public.crunchbase.com/t_api_images/v1483599453/frd714tl3ziujwarpk5b.png' },
  { label:'DiskFaktory' ,icon: 'http://public.crunchbase.com/t_api_images/v1480082444/vcirsocnxkizovkwvaop.png' },
  { label:'ClearAccessIP' ,icon: 'http://public.crunchbase.com/t_api_images/v1477647739/zc1nnsorvp5suzhalzfq.png' },
  { label:'PRX.co' ,icon: 'http://public.crunchbase.com/t_api_images/v1484871708/bswaanuai7mv3atued1e.png' },
  { label:'Polychain Capital' ,icon: 'http://public.crunchbase.com/t_api_images/v1481514511/modpfx4kq96fmtrfmeaq.png' },
  { label:'Mayfield Software' ,icon: '' },
  { label:'Scaled Biolabs' ,icon: 'http://public.crunchbase.com/t_api_images/v1479273490/qczw9cli9sx0ms3hr9b0.png' },
  { label:'Alike' ,icon: 'http://public.crunchbase.com/t_api_images/v1482215804/tgwcsmo0d6jldmdn1lju.png' },
  { label:'MDadmit' ,icon: '' },
  { label:'Cargocentric' ,icon: 'http://public.crunchbase.com/t_api_images/v1483487503/lkd3n7d9ygxbzochm6zv.png' },
  { label:'Nonna Box' ,icon: 'http://public.crunchbase.com/t_api_images/v1482473483/arbdd80lnzjtd7ynp9kn.jpg' },
  { label:'Text To Ticket' ,icon: 'http://public.crunchbase.com/t_api_images/v1486400140/w5wkdkmigocrwiugoopl.jpg' },
  { label:'Rested' ,icon: 'http://public.crunchbase.com/t_api_images/v1485600282/uqxzk9zdgvsbimuemibg.png' },
  { label:'One Preschool' ,icon: 'http://public.crunchbase.com/t_api_images/v1486004273/wukjqzlpegdxa7erxvan.png' },
  { label:'Argent Mill' ,icon: 'http://public.crunchbase.com/t_api_images/v1481004494/x0zjhfqc1bqilm9vd55r.png' },
  { label:'Genium.io' ,icon: 'http://public.crunchbase.com/t_api_images/v1482297022/nryqgijgp1bggsdm6b5h.png' },
  { label:'Awair' ,icon: 'http://public.crunchbase.com/t_api_images/v1485570079/kzgnoj29nmmodplinezy.png' },
  { label:'If Only' ,icon: 'http://public.crunchbase.com/t_api_images/v1481787691/m2qs0ukvex6ffxkn4v2c.png' },
  { label:'Join It' ,icon: 'http://public.crunchbase.com/t_api_images/v1477237271/pckqis0z9pc0btlv2dlc.png' },
  { label:'Vinci' ,icon: 'http://public.crunchbase.com/t_api_images/v1478608961/rxq29jkpzlaayv7eterk.png' },
  { label:'Leif Therapeutics' ,icon: 'http://public.crunchbase.com/t_api_images/v1484115770/jegwcfjlcdre8ygnkhet.png' },
  { label:'Skycool Systems' ,icon: 'http://public.crunchbase.com/t_api_images/v1478666883/cezovts9rungpci4trih.png' },
  { label:'Machine' ,icon: 'http://public.crunchbase.com/t_api_images/v1481669536/q37apjh3lebffpdtfr91.png' },
  { label:'Perlara' ,icon: '' },
  { label:'Core Wellness' ,icon: 'http://public.crunchbase.com/t_api_images/v1486195484/z16937by5ogmzauruwdv.png' },
  { label:'Acrossio (Across Lab Inc.)' ,icon: 'http://public.crunchbase.com/t_api_images/v1478716426/l4n7wubiluhjfvdlmkvz.png' },
  { label:'Zephyr Digital' ,icon: 'http://public.crunchbase.com/t_api_images/v1478130830/clswbt2bs209zcfomu5x.jpg' },
  { label:'Thalman Health' ,icon: 'http://public.crunchbase.com/t_api_images/v1477349596/ttug82jno4e8bpt02ns6.jpg' },
  { label:'TalkIQ' ,icon: 'http://public.crunchbase.com/t_api_images/v1483596871/nn3wqfqkzezsp3dc4vpl.png' },
  { label:'IAGO' ,icon: 'http://public.crunchbase.com/t_api_images/v1482043868/r51rwgnlt1dipqs8hjqb.png' },
  { label:'Hyperstandard' ,icon: 'http://public.crunchbase.com/t_api_images/v1486136484/mbzflazfzbatlgusfgff.png' },
  { label:'Campfire' ,icon: 'http://public.crunchbase.com/t_api_images/v1479967186/bp476ygkvowya9hgdbg3.png' },
  { label:'SpiritualVR, Inc.' ,icon: 'http://public.crunchbase.com/t_api_images/v1479503788/d1uuctfmihtwptrslgpy.png' }
  ];

  $project.autocomplete({
    minLength: 0,
    source: projects,
    focus: function( event, ui ) {
      $project.val( ui.item.label );
      return false;
    }
  }).keyup(function (e) {
        if(e.which === 13) {
            console.log($project.val())
           $.ajax({
            type: "GET",
            url: "/search",
            success: (console.log("success"))
           })
           .done(function(r){
            console.log(r);
           })
        }
    });

  $project.data( "ui-autocomplete" )._renderItem = function( ul, item ) {

    var $li = $('<li>'),
        $img = $('<img>');

    $img.attr({
      src: item.icon,
      alt: item.label
    });

    $li.attr('data-value', item.label);
    $li.append('<a href="#">');
    $li.find('a').append($img).append(item.label);

    return $li.appendTo(ul);
  };

};
