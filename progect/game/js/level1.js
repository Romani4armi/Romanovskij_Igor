var Example = Example || {};
     //проверка на создание уровня 
     levelCounter=2
Example.slingshot1 = function() {
    levelsArr[1]=0
    if (s) document.getElementById('game').innerHTML = '' // если s === true значит уровень создан и мы его чистим
    document.getElementById('game').style.display = 'inline-block'
    const  Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Events = Matter.Events,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create({
       
    }),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.getElementById('game'),
        engine: engine,
        options: {
            wireframes : false,
            background: 'img/back5.png',
            width: 910,
            height: 600,
            showAngleIndicator: false    ,
            render: { fillStyle: '#030303' } 
        }
    });
    //document.querySelector('canvas').style.
    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);
    let flyPos = {
        x: 170,
        y: 450
    }
    // add bodies
    let ground = Bodies.rectangle(400, 635, 910, 100, { isStatic: true, render: { 
        visible:false,    
        sprite :{
                
            }

     } }),
        rockOptions = { 
            density: 0.001 ,
            render: {
                sprite: {
                    texture: "img/fly2.png",
                        xScale: 1,
                        yScale: 1,
                    
                    }
            }
        },
        rock = Bodies.circle(flyPos.x, flyPos.y, 20, rockOptions),
        anchor = flyPos,
        elastic = Constraint.create({ 
            pointA: anchor, 
            bodyB: rock, 
            stiffness: 0.05,
            render : {
               visible : false
            }
        });
     
    const sling1 = Bodies.rectangle(170,510,10,100,{
            isStatic : true,
            isSensor : true,
            render : {
                sprite : {
                    texture : 'img/sling.png',
                    xScale: 1,
                    yScale: .8,
                }
            }

    })
    const sling2 = Bodies.rectangle(142,470,1,1,{
        isStatic : true,
        isSensor : true,
        render : {
            sprite : {
                texture : 'img/sling2.png',
                xScale: 1,
                yScale: .8,
            }
        }

})
const gorizBlock = {
    sprite: {
        texture: "img/beam.png",
        xScale: 3,
        }
}
const vertBlock = {
    sprite: {
        texture: "img/column.png",
        xScale: 1,
        yScale: 1.2
        }
}
    const ballRender = {
        sprite:{
            texture: "img/stone.png",
            xScale: 1.1,
            yScale:1.1
        }
    }
   const ball1 = Bodies.circle(580,550,40,{
    render : ballRender
   }) 
   const ball2 = Bodies.circle(750,550,40,{
    render : ballRender
   }) 
   const ball3 = Bodies.circle(620,190,40,{
    render : ballRender
   }) 
   const block1 = Bodies.rectangle(750,490,50,100,{
        render: {
            sprite : {
                texture: "img/stone2.png",
                xScale: .6,
                yScale: 1.2
            }
        }
   })
   const block2 = Bodies.rectangle(580,490,20,100,{
    render : vertBlock
   })
   const block3 = Bodies.rectangle(670,510,250,20,{
    render : gorizBlock

   })
   const block4 = Bodies.rectangle(600,300,20,100,{
    render : vertBlock
   })
   const block5 = Bodies.rectangle(680,300,20,100,{
    render :vertBlock
   })
   const block6 = Bodies.rectangle(670,390,250,20,{
    render : gorizBlock
   })
   const block7 = Bodies.rectangle(600,330,20,101,{
    render : vertBlock
   })
   const block8 = Bodies.rectangle(680,330,20,100,{
    render : vertBlock
   })
   const block9 = Bodies.rectangle(640,250,110,20,{
    render : {
        sprite: {
            texture: "img/beam.png",
            xScale: 1.4,
        }
    } 
   })

   const pig1 = Bodies.circle(620,470,25,{ 
            density: 0.001 ,
            render: {
                sprite: {
                    texture: "img/pig.png",
                      xScale: 0.07,
                    yScale: 0.07,
                    
                    }
            }
        })
       
   const pig2 = Bodies.circle(640,300,25,{ 
            density: 0.001 ,
            render: {
                sprite: {
                    texture: "img/pig.png",
                      xScale: 0.07,
                    yScale: 0.07,
                    
                    }
            }
        })
        pig1.pig = 'pig1';
        pig2.pig = 'pig2';

        // анимированное удаление свиньи
    let counterPig = 2;
    const deadPig = (pig) => {
       pig.render.sprite.texture = "img/boom.png"
        const tick = () =>{
            pig.render.sprite.xScale*=0.9
            pig.render.sprite.yScale*=0.9
            if (pig.render.sprite.xScale > 0.01){
                setTimeout(tick, 100)
                
            } else {
                Composite.remove(engine.world, [pig]);
                counterPig--
                if (!counterPig) {
                    levelComplite(1)
                }
            }
             
        }

        tick()
    }   
   let  arr = [ground,pig1,pig2,sling1,ball1,ball2,block3,block1,block2,block6, ball3, rock, elastic,sling2];
    arr.push(block7);
    arr.push(block8,block9)
    
   
    Composite.add(engine.world, arr );
    
    Events.on(engine, 'collisionStart', (event) => {
            arr = event.source.world.bodies
       for(let i=0; i < arr.length; i++){
        if (arr[i].pig){
            if (arr[i].pig === 'pig1' && (arr[i].positionImpulse.x > 0.1 || arr[i].positionImpulse.y> 0.1 )){
                arr[i].pig=''
                soundBoom1.play()
                deadPig(pig1)
            }
            if (arr[i].pig === 'pig2' && (arr[i].positionImpulse.x> 0.1  || arr[i].positionImpulse.y> 0.1 )){
                arr[i].pig=''
                soundBoom2.play()
                deadPig(pig2)
            }
        }
       } 
        
    });

   

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.05,
                render: {
                    visible: false
                }
                
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;
    // бросаем птицу
    let isFired = false;
    Events.on(mouseConstraint, 'startdrag',(event)=>{
        if(event.body===rock){
            
            slingShot.play()
        }
    })
    Events.on(mouseConstraint, 'enddrag',(event)=>{
        if(event.body===rock){
            isFired = true
            birdsFly.play()
        }
    })
    // счетчик количества птиц
    let counterFly = 2;
    Events.on(engine, 'afterUpdate', () => {
        
        let distX = Math.abs(rock.position.x - flyPos.x);
        let distY = Math.abs(rock.position.y - flyPos.y)
        if (isFired && distX<20 && distY < 20) {
            
            rock = Bodies.circle(170, 350,  20, rockOptions);
            levelsArr[1]++
            if (counterFly-->0) {
                Composite.add(engine.world, rock);
                
            } else {
                setTimeout(()=>{
                    if (!document.querySelector('.level_complite')){
                        levelsArr[1]++
                    levelComplite(1)
                    
                    document.getElementById('next_btn').style.display = 'none'
                    }
                    
                },4000)
                
            }
            
            elastic.bodyB = rock;
            isFired = false

        }
    });

    // добавляем рамку к уровню
    document.querySelector('canvas').className = 'canvasClass'
    s = true
    //подгонка видового экрана рендеринга к сцене
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });
    
    

};


           