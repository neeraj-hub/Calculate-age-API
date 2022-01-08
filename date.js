const http=require('http');
const url=require('url');

http.createServer((req,res)=>{
    // console.log(req.url);
  /*   if(req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        const q=url.parse(req.url,true).query;
        console.log(q);
        res.write('accepted / ');
        res.end();
    }
    else if(req.url=='/age'){
        res.write('accepted /age');
        res.end();
    }
    else{
        res.writeHead(200);
        res.write('not accepted');
        res.end();
    } */
    res.writeHead(200,{'content-type':'text/html'});
    const q=url.parse(req.url,true).query;
    let year=q.year;
    let month=q.month;
    let day=q.day;
    let name=q.name;
    let age=new Date().getFullYear()-year;
    if(new Date().getMonth() < month ||(new Date().getMonth()== month && new Date().getDate()<day)){
        age--;
    }
    // console.log(q);
    res.write('Hello'+' '+name);
    res.write('\n'+'You are currently '+age+' years old.')
    res.end();
   /*  if(req.url='/age'){

        console.log(req.url);
        const q=url.parse(req.url,true).query;
        console.log(q);
    }
    else{
        console.log('madarchod');
    } */

   /*  switch(req.url){
        case '/age':
            res.writeHead(200,{'content-type':'text/html'});
            const q=url.parse(req.url,true).query;
            console.log(q);
            res.write('accepted');
            res.end();
        break;
        case '/age/year':
            const q1=url.parse(req.url,true).query;
            console.log(q1);
            break;
 */

       /*  case '/home':
            console.log('home page');
            res.end();
        break;
 */
/*         default:
            console.log('else case');
            res.end();

        

    } */

}).listen(5000)