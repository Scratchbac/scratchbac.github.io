var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Sirens in the Cosmic Fugue",
      excerpt: "Create vessels and sails adjusted to the heavenly ether, and there will be plenty of people unafraid of the empty...",
      categories: ["Cosmos"],
      tags: ["exploration","NASA","Soviet","spacex","universe","humanity"],
      id: 0
    });
    
  
    idx.add({
      title: "All Watched Over By Machines Of Loving Grace",
      excerpt: "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its...",
      categories: ["Sapiens"],
      tags: ["techne"],
      id: 1
    });
    
  
    idx.add({
      title: "The Hacker Known as 4chan",
      excerpt: "Once, Zhuang Zhou dreamed he was a butterfly, a butterfly flitting and fluttering about, happy with himself and doing as...",
      categories: ["Sapiens"],
      tags: ["techne","ethnography"],
      id: 2
    });
    
  
    idx.add({
      title: "Too soon to say",
      excerpt: "Let A Hundred Flowers Bloom; Let A Hundred Schools Of Thought Contend — Mao Zedong, Hundred Flowers Movement In the...",
      categories: ["Sapiens"],
      tags: ["thoughts","sapiens"],
      id: 3
    });
    
  
    idx.add({
      title: "Ocean",
      excerpt: "Now I a fourfold vision see And a fourfold vision is given to me:Tis fourfold in my supreme delight,And threefold...",
      categories: ["Sapiens"],
      tags: ["humanity"],
      id: 4
    });
    
  
    idx.add({
      title: "Natura Naturans",
      excerpt: "On the mountain they felled my trunk All my schemes come to ‘naught Without shame a troubador am I I...",
      categories: ["Sapiens"],
      tags: ["nature","techne"],
      id: 5
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Sirens in the Cosmic Fugue",
        "url": "https://kosmonautx.github.io/cosmos/sirens-in-the-cosmic-fugue/",
        "excerpt": "Create vessels and sails adjusted to the heavenly ether, and there will be plenty of people unafraid of the empty...",
        "teaser":
          
            "https://kosmonautx.github.io/assets/images/earthrise.jpg"
          
      },
    
      
      {
        "title": "All Watched Over By Machines Of Loving Grace",
        "url": "https://kosmonautx.github.io/sapiens/all-watched-over-by-machines-of-loving-grace/",
        "excerpt": "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its...",
        "teaser":
          
            "https://kosmonautx.github.io/assets/images/hal_9000.jpg"
          
      },
    
      
      {
        "title": "The Hacker Known as 4chan",
        "url": "https://kosmonautx.github.io/sapiens/the-hacker-known-as-4chan/",
        "excerpt": "Once, Zhuang Zhou dreamed he was a butterfly, a butterfly flitting and fluttering about, happy with himself and doing as...",
        "teaser":
          
            "https://kosmonautx.github.io/assets/images/4chan.jpg"
          
      },
    
      
      {
        "title": "Too soon to say",
        "url": "https://kosmonautx.github.io/sapiens/confucius-says/",
        "excerpt": "Let A Hundred Flowers Bloom; Let A Hundred Schools Of Thought Contend — Mao Zedong, Hundred Flowers Movement In the...",
        "teaser":
          
            "https://kosmonautx.github.io/assets/images/tiananmen_square.jpg"
          
      },
    
      
      {
        "title": "Ocean",
        "url": "https://kosmonautx.github.io/sapiens/ocean/",
        "excerpt": "Now I a fourfold vision see And a fourfold vision is given to me:Tis fourfold in my supreme delight,And threefold...",
        "teaser":
          
            "https://kosmonautx.github.io/assets/images/ocean.jpg"
          
      },
    
      
      {
        "title": "Natura Naturans",
        "url": "https://kosmonautx.github.io/sapiens/natura-naturans/",
        "excerpt": "On the mountain they felled my trunk All my schemes come to ‘naught Without shame a troubador am I I...",
        "teaser":
          
            "https://kosmonautx.github.io/assets/images/arboreal-office.jpg"
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
