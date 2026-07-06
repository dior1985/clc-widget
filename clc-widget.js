/* ============================================================
   NYC Cleaning Cost & Time Calculator — embeddable widget
   Embed anywhere with:
     <div data-clc-widget></div>
     <script src="https://cdn.jsdelivr.net/gh/dior1985/clc-widget@main/clc-widget.js"></script>
   ============================================================ */
(function () {
  "use strict";

  /* ---- links ---- */
  var SHARE_URL = 'https://www.apartmentcleaningservicelongislandcity.us';
  var BOOKING   = 'https://www.apartmentcleaningservicelongislandcity.us/booking-page';
  var HOME      = 'https://www.apartmentcleaningservicelongislandcity.us';
  var EMBED_SRC = 'https://cdn.jsdelivr.net/gh/dior1985/clc-widget@main/clc-widget.js';
  var FONTS     = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@300;400;500;600&display=swap';

  var CSS = `
  .clc-widget *{box-sizing:border-box;margin:0;padding:0}
  .clc-widget{
    --ink:#191919; --stone:#6e6a63; --line:#e8e4dd;
    --gold:#a8894f; --gold-deep:#8a6f3c;
    --rose:#d98ba3; --teal:#5fb3a1; --lav:#9b8ec4;
    --cream:#faf8f4; --white:#ffffff;
    --serif:'Cormorant Garamond',Georgia,serif;
    --sans:'Inter',system-ui,-apple-system,sans-serif;
    position:relative;overflow:hidden;background:var(--cream);color:var(--ink);
    font-family:var(--sans);line-height:1.6;border:1px solid var(--line);
    -webkit-font-smoothing:antialiased;
  }
  .clc-widget::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;z-index:3;
    background:linear-gradient(90deg,transparent,var(--gold),var(--rose),var(--teal),transparent);
    background-size:200% 100%;animation:clcFlow 6s linear infinite}
  @keyframes clcFlow{to{background-position:200% 0}}
  .clc-orb{position:absolute;border-radius:50%;filter:blur(70px);opacity:.28;pointer-events:none;z-index:0}
  .clc-orb.a{width:360px;height:360px;top:-120px;right:-90px;background:radial-gradient(circle,var(--rose),transparent 70%);animation:clcDrift 16s ease-in-out infinite}
  .clc-orb.b{width:320px;height:320px;bottom:-120px;left:-90px;background:radial-gradient(circle,var(--teal),transparent 70%);animation:clcDrift 20s ease-in-out infinite reverse}
  @keyframes clcDrift{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-24px) scale(1.1)}}
  .clc-inner{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1.1fr;gap:0}
  .clc-form{padding:44px 40px}
  .clc-eyebrow{display:flex;align-items:center;gap:12px;font-size:10px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:14px}
  .clc-eyebrow::before{content:"";width:40px;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--gold),var(--rose),var(--teal));background-size:200% 100%;animation:clcFlow 5s linear infinite}
  .clc-form h2{font-family:var(--serif);font-weight:500;font-size:clamp(1.7rem,3vw,2.3rem);line-height:1.1;letter-spacing:-.01em;margin-bottom:6px}
  .clc-form h2 em{font-style:italic;background:linear-gradient(100deg,var(--gold-deep),var(--rose),var(--lav),var(--gold-deep));background-size:250% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:clcShine 7s linear infinite}
  @keyframes clcShine{to{background-position:250% center}}
  .clc-form .hint{color:var(--stone);font-weight:300;font-size:.85rem;margin-bottom:26px}
  .clc-field{margin-bottom:20px}
  .clc-field .lbl{display:block;font-size:.64rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:9px}
  .clc-step{display:flex;align-items:center;border:1px solid var(--line);background:var(--white);width:fit-content;border-radius:10px;overflow:hidden}
  .clc-step button{width:42px;height:42px;border:0;background:transparent;cursor:pointer;font-size:1.2rem;color:var(--gold-deep);font-family:var(--sans);transition:background .2s ease,color .2s ease}
  .clc-step button:hover{background:var(--gold);color:var(--white)}
  .clc-step .num{min-width:56px;text-align:center;font-family:var(--serif);font-size:1.4rem;font-weight:600}
  .clc-seg{display:flex;flex-wrap:wrap;gap:8px}
  .clc-seg button{border:1px solid var(--line);background:var(--white);cursor:pointer;font-family:var(--sans);font-size:.78rem;font-weight:500;color:var(--stone);padding:11px 16px;border-radius:999px;transition:all .25s cubic-bezier(.22,1,.36,1)}
  .clc-seg button:hover{border-color:rgba(168,137,79,.45);color:var(--ink)}
  .clc-seg button.on{background:var(--ink);color:var(--white);border-color:var(--ink);box-shadow:0 10px 22px -12px rgba(25,25,25,.5)}
  .clc-row2{display:grid;grid-template-columns:1fr 1fr;gap:20px}
  .clc-result{position:relative;padding:44px 40px;background:var(--white);border-left:1px solid var(--line)}
  .clc-result::before,.clc-result::after{content:"";position:absolute;width:28px;height:28px;pointer-events:none;z-index:2}
  .clc-result::before{top:16px;right:16px;border-top:2px solid var(--teal);border-right:2px solid var(--teal)}
  .clc-result::after{bottom:16px;left:16px;border-bottom:2px solid var(--rose);border-left:2px solid var(--rose)}
  .clc-headline{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:8px}
  .clc-stat{flex:1;min-width:140px}
  .clc-stat .k{font-size:.62rem;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:6px;display:flex;align-items:center;gap:7px}
  .clc-stat .k::before{content:"";width:6px;height:6px;border-radius:50%;animation:clcPulse 2.6s ease-in-out infinite}
  .clc-stat.price .k::before{background:var(--teal)}
  .clc-stat.time .k::before{background:var(--rose);animation-delay:1s}
  @keyframes clcPulse{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.5);opacity:1}}
  .clc-stat .v{font-family:var(--serif);font-weight:600;font-size:clamp(2rem,4vw,2.9rem);line-height:1;color:var(--ink)}
  .clc-range{font-size:.78rem;color:var(--stone);font-weight:300;margin-top:5px}
  .clc-compare{margin:20px 0 26px;padding:13px 16px;border-radius:10px;background:var(--cream);border:1px solid var(--line);font-size:.82rem;color:var(--stone);font-weight:300;line-height:1.5}
  .clc-compare b{color:var(--ink);font-weight:600}
  .clc-break h3{font-size:.64rem;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--ink);margin-bottom:16px;display:flex;align-items:center;gap:10px}
  .clc-break h3::before{content:"";width:18px;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--gold),var(--rose),var(--teal))}
  .clc-bars{display:flex;flex-direction:column;gap:13px}
  .clc-bar .top{display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:5px}
  .clc-bar .top .rname{color:var(--ink);font-weight:500}
  .clc-bar .top .rmin{color:var(--stone);font-family:var(--serif);font-size:1rem;font-weight:600}
  .clc-track{height:8px;border-radius:8px;background:var(--cream);overflow:hidden}
  .clc-fill{height:100%;width:0;border-radius:8px;transition:width 1s cubic-bezier(.22,1,.36,1)}
  .clc-bar:nth-child(1) .clc-fill{background:linear-gradient(90deg,var(--teal),#7fc9ba)}
  .clc-bar:nth-child(2) .clc-fill{background:linear-gradient(90deg,var(--rose),#e6a9bd)}
  .clc-bar:nth-child(3) .clc-fill{background:linear-gradient(90deg,var(--lav),#b3a7d6)}
  .clc-bar:nth-child(4) .clc-fill{background:linear-gradient(90deg,var(--gold),#c9a86a)}
  .clc-bar:nth-child(5) .clc-fill{background:linear-gradient(90deg,#8aa1b8,#a9bccd)}
  .clc-bar:nth-child(6) .clc-fill{background:linear-gradient(90deg,#c58b6f,#d8a891)}
  .clc-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
  .clc-btn{position:relative;display:inline-block;overflow:hidden;cursor:pointer;border:0;padding:16px 30px;font-family:var(--sans);font-size:.72rem;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--white);background:var(--ink);transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s ease;text-decoration:none}
  .clc-btn:hover{transform:translateY(-3px);box-shadow:0 18px 36px -14px rgba(168,137,79,.55)}
  .clc-btn span{position:relative;z-index:2}
  .clc-btn::before{content:"";position:absolute;inset:0;z-index:0;background:linear-gradient(105deg,var(--gold-deep),var(--gold),var(--rose));transform:translateX(-101%);transition:transform .55s cubic-bezier(.22,1,.36,1)}
  .clc-btn:hover::before{transform:translateX(0)}
  .clc-btn.ghost{background:var(--white);color:var(--ink);border:1px solid var(--line)}
  .clc-btn.ghost::before{display:none}
  .clc-btn.ghost:hover{border-color:var(--gold);color:var(--gold-deep);box-shadow:0 14px 28px -16px rgba(25,25,25,.35)}
  .clc-copied{font-size:.72rem;color:var(--teal);font-weight:500;align-self:center;opacity:0;transition:opacity .3s ease}
  .clc-copied.show{opacity:1}
  .clc-cite{position:relative;z-index:1;margin:0 40px 40px;padding:20px 22px;background:var(--cream);border:1px dashed var(--line);border-radius:12px}
  .clc-cite .ct{font-size:.6rem;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:10px}
  .clc-cite textarea{width:100%;height:80px;resize:none;border:1px solid var(--line);border-radius:8px;background:var(--white);padding:10px 12px;font-family:ui-monospace,Menlo,monospace;font-size:.72rem;color:var(--stone);line-height:1.5}
  .clc-cite small{display:block;color:var(--stone);font-weight:300;font-size:.72rem;margin-top:8px}
  .clc-foot{position:relative;z-index:1;padding:16px 40px;border-top:1px solid var(--line);font-size:.68rem;color:var(--stone);font-weight:300;letter-spacing:.03em;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
  .clc-foot a{color:var(--gold-deep);text-decoration:none;font-weight:500}
  .clc-foot a:hover{color:var(--gold)}
  @media(max-width:820px){
    .clc-inner{grid-template-columns:1fr}
    .clc-result{border-left:0;border-top:1px solid var(--line)}
    .clc-form,.clc-result{padding:34px 24px}
    .clc-cite{margin:0 24px 24px}
    .clc-foot{padding:16px 24px}
  }
  @media(prefers-reduced-motion:reduce){
    .clc-widget::before,.clc-orb,.clc-form h2 em,.clc-eyebrow::before,.clc-stat .k::before{animation:none!important}
    .clc-fill{transition:none}
  }`;

  var HTML =
  '<div class="clc-orb a"></div><div class="clc-orb b"></div>'+
  '<div class="clc-inner">'+
    '<div class="clc-form">'+
      '<div class="clc-eyebrow">NYC Cleaning Estimator</div>'+
      '<h2>What will it cost — and <em>how long?</em></h2>'+
      '<p class="hint">Adjust your home below. Estimates update instantly.</p>'+
      '<div class="clc-field"><span class="lbl">Cleaning Type</span>'+
        '<div class="clc-seg" data-group="type">'+
          '<button type="button" data-val="standard" class="on">Standard</button>'+
          '<button type="button" data-val="deep">Deep Clean</button>'+
          '<button type="button" data-val="moveout">Move-Out</button></div></div>'+
      '<div class="clc-row2">'+
        '<div class="clc-field"><span class="lbl">Bedrooms</span>'+
          '<div class="clc-step" data-step="beds" data-min="0" data-max="6">'+
            '<button type="button" data-d="-1">&minus;</button><span class="num">1</span><button type="button" data-d="1">+</button></div></div>'+
        '<div class="clc-field"><span class="lbl">Bathrooms</span>'+
          '<div class="clc-step" data-step="baths" data-min="1" data-max="6">'+
            '<button type="button" data-d="-1">&minus;</button><span class="num">1</span><button type="button" data-d="1">+</button></div></div></div>'+
      '<div class="clc-field"><span class="lbl">Approx. Size</span>'+
        '<div class="clc-seg" data-group="size">'+
          '<button type="button" data-val="500" class="on">Studio &middot; &le;500</button>'+
          '<button type="button" data-val="800">Small &middot; 500&ndash;900</button>'+
          '<button type="button" data-val="1200">Medium &middot; 900&ndash;1400</button>'+
          '<button type="button" data-val="1800">Large &middot; 1400+</button></div></div>'+
      '<div class="clc-field"><span class="lbl">Last Cleaned</span>'+
        '<div class="clc-seg" data-group="since">'+
          '<button type="button" data-val="1" class="on">Recently</button>'+
          '<button type="button" data-val="1.12">1 month</button>'+
          '<button type="button" data-val="1.28">3+ months</button>'+
          '<button type="button" data-val="1.45">Never / new</button></div></div>'+
      '<div class="clc-field"><span class="lbl">Pets at Home</span>'+
        '<div class="clc-seg" data-group="pets">'+
          '<button type="button" data-val="0" class="on">None</button>'+
          '<button type="button" data-val="1">1</button>'+
          '<button type="button" data-val="2">2+</button></div></div>'+
    '</div>'+
    '<div class="clc-result">'+
      '<div class="clc-headline">'+
        '<div class="clc-stat price"><div class="k">Estimated Cost</div>'+
          '<div class="v clc-price">$180</div>'+
          '<div class="clc-range clc-priceRange">Typical range $160&ndash;$200</div></div>'+
        '<div class="clc-stat time"><div class="k">Estimated Time</div>'+
          '<div class="v clc-time">2h 45m</div>'+
          '<div class="clc-range clc-crew">&asymp; 1 cleaner</div></div></div>'+
      '<div class="clc-compare">&mdash;</div>'+
      '<div class="clc-break"><h3>Room-by-Room Breakdown</h3><div class="clc-bars"></div></div>'+
      '<div class="clc-actions">'+
        '<a class="clc-btn clc-book" href="'+BOOKING+'"><span>Book This Clean</span></a>'+
        '<button type="button" class="clc-btn ghost clc-share">Copy Shareable Link</button>'+
        '<span class="clc-copied">Link copied &#10003;</span></div>'+
    '</div>'+
  '</div>'+
  '<div class="clc-cite"><div class="ct">Publishers &mdash; embed this tool free</div>'+
    '<textarea class="clc-embed" readonly></textarea>'+
    '<small>Free to embed with a link back to Apartment Cleaning Service Long Island City. Updated <span class="clc-date"></span>.</small></div>'+
  '<div class="clc-foot"><span>Estimates are guidance only &mdash; final price confirmed at booking.</span>'+
    '<a href="'+HOME+'">apartmentcleaningservicelongislandcity.us</a></div>';

  function injectHead(){
    if(!document.getElementById('clc-fonts')){
      var l=document.createElement('link'); l.id='clc-fonts'; l.rel='stylesheet'; l.href=FONTS; document.head.appendChild(l);
    }
    if(!document.getElementById('clc-styles')){
      var s=document.createElement('style'); s.id='clc-styles'; s.textContent=CSS; document.head.appendChild(s);
    }
  }

  function fmtTime(m){ m=Math.round(m/5)*5; var h=Math.floor(m/60), mm=m%60;
    return (h?h+'h ':'')+(mm?mm+'m':(h?'':'0m')); }

  function initWidget(root){
    if(root.getAttribute('data-clc-ready')) return;
    root.setAttribute('data-clc-ready','1');
    root.classList.add('clc-widget');
    root.innerHTML = HTML;
    var $=function(s){return root.querySelector(s);};

    /* ==== CONSTANTS — tune with your real booking data ==== */
    var TYPE = {
      standard:{mult:1.00, rate:55},
      deep:    {mult:1.55, rate:65},
      moveout: {mult:1.75, rate:70}
    };
    var BASE_MIN = {kitchen:35, bath:28, bed:22, living:26};
    var SQFT_MIN_PER_100 = 4;
    var PET_MIN_EACH = 12;
    var CITY_AVG_MIN = 165;
    /* ======================================================= */

    var state = {type:'standard', beds:1, baths:1, size:500, since:1, pets:0};

    try{
      var q = new URLSearchParams(window.location.search).get('clc');
      if(q){ var p=q.split('-');
        state.type=({s:'standard',d:'deep',m:'moveout'})[p[0]]||state.type;
        state.beds=+p[1]||state.beds; state.baths=+p[2]||state.baths;
        state.size=+p[3]||state.size; state.since=+p[4]||state.since; state.pets=+p[5]||state.pets;
      }
    }catch(e){}

    function compute(){
      var t=TYPE[state.type];
      var rooms=[
        {name:'Kitchen', min:BASE_MIN.kitchen},
        {name:'Bathroom'+(state.baths>1?'s':''), min:BASE_MIN.bath*state.baths},
        {name:'Bedroom'+(state.beds!==1?'s':''), min:BASE_MIN.bed*Math.max(state.beds,0)},
        {name:'Living / Common', min:BASE_MIN.living},
        {name:'Floors & Dusting', min:(state.size/100)*SQFT_MIN_PER_100},
        {name:'Pets / Extra', min:state.pets*PET_MIN_EACH}
      ].filter(function(r){return r.min>0.5;});
      var raw=rooms.reduce(function(s,r){return s+r.min;},0);
      var totalMin=raw*t.mult*state.since;
      rooms.forEach(function(r){r.adj=r.min*t.mult*state.since;});
      var price=Math.max((totalMin/60)*t.rate,90);
      return {rooms:rooms, totalMin:totalMin, price:Math.round(price/10)*10};
    }

    function render(){
      var r=compute();
      $('.clc-price').textContent='$'+r.price;
      $('.clc-priceRange').textContent='Typical range $'+Math.round(r.price*0.9/10)*10+'\u2013$'+Math.round(r.price*1.12/10)*10;
      $('.clc-time').textContent=fmtTime(r.totalMin);
      $('.clc-crew').textContent='\u2248 1 cleaner \u00b7 or '+fmtTime(r.totalMin/2)+' with 2';

      var pct=Math.round((r.totalMin/CITY_AVG_MIN-1)*100);
      var cmp=$('.clc-compare');
      if(Math.abs(pct)<=7){ cmp.innerHTML='Your place is right around the <b>NYC average</b> for cleaning time.'; }
      else if(pct>0){ cmp.innerHTML='This home takes about <b>'+pct+'% longer</b> than the typical NYC apartment we clean.'; }
      else{ cmp.innerHTML='This home cleans about <b>'+Math.abs(pct)+'% faster</b> than the typical NYC apartment.'; }

      var max=Math.max.apply(null,r.rooms.map(function(x){return x.adj;}));
      $('.clc-bars').innerHTML=r.rooms.map(function(x){
        return '<div class="clc-bar"><div class="top"><span class="rname">'+x.name+
          '</span><span class="rmin">'+fmtTime(x.adj)+'</span></div>'+
          '<div class="clc-track"><div class="clc-fill" data-w="'+Math.round(x.adj/max*100)+'"></div></div></div>';
      }).join('');
      requestAnimationFrame(function(){requestAnimationFrame(function(){
        root.querySelectorAll('.clc-fill').forEach(function(f){f.style.width=f.getAttribute('data-w')+'%';});
      });});

      $('.clc-embed').value='<div data-clc-widget></div>\n<'+'script src="'+EMBED_SRC+'"><'+'/script>\n<p>Cleaning cost calculator by <a href="'+HOME+'">Apartment Cleaning Service Long Island City</a></p>';
    }

    function syncControls(){
      root.querySelectorAll('.clc-seg').forEach(function(seg){
        var g=seg.getAttribute('data-group');
        var val=g==='type'?state.type:g==='size'?state.size:g==='since'?state.since:state.pets;
        seg.querySelectorAll('button').forEach(function(b){
          b.classList.toggle('on', b.getAttribute('data-val')==String(val));
        });
      });
      root.querySelectorAll('.clc-step').forEach(function(st){
        st.querySelector('.num').textContent=state[st.getAttribute('data-step')];
      });
    }

    root.querySelectorAll('.clc-seg').forEach(function(seg){
      seg.addEventListener('click',function(e){
        var b=e.target.closest('button'); if(!b)return;
        seg.querySelectorAll('button').forEach(function(x){x.classList.remove('on');});
        b.classList.add('on');
        var g=seg.getAttribute('data-group'), v=b.getAttribute('data-val');
        if(g==='type')state.type=v; else if(g==='size')state.size=+v;
        else if(g==='since')state.since=+v; else if(g==='pets')state.pets=+v;
        render();
      });
    });
    root.querySelectorAll('.clc-step').forEach(function(st){
      var key=st.getAttribute('data-step'), min=+st.getAttribute('data-min'), max=+st.getAttribute('data-max');
      st.addEventListener('click',function(e){
        var b=e.target.closest('button'); if(!b)return;
        state[key]=Math.min(max,Math.max(min,state[key]+ +b.getAttribute('data-d')));
        st.querySelector('.num').textContent=state[key];
        render();
      });
    });

    $('.clc-share').addEventListener('click',function(){
      var url=SHARE_URL;
      var done=function(){var c=$('.clc-copied'); c.classList.add('show'); setTimeout(function(){c.classList.remove('show');},1800);};
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(url).then(done,done);}
      else{
        var t=document.createElement('textarea'); t.value=url; document.body.appendChild(t);
        t.select(); try{document.execCommand('copy');}catch(e){} document.body.removeChild(t); done();
      }
    });
    $('.clc-embed').addEventListener('click',function(){this.select();});
    $('.clc-date').textContent=new Date().toLocaleDateString('en-US',{month:'long',year:'numeric'});

    syncControls();
    render();
  }

  function boot(){
    injectHead();
    document.querySelectorAll('[data-clc-widget]').forEach(initWidget);
  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',boot); }
  else { boot(); }
})();
