var Example = Example || {};
     //проверка на создание уровня 
     levelCounter=3
Example.slingshot2 = function() {
    levelsArr[2]=0
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
            background: 'img/back6.png',
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
        y: 330
    }
    // add bodies
    let ground = Bodies.rectangle(400, 540, 910, 100, { isStatic: true, render: { 
        visible:false,    

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
     
    const sling1 = Bodies.rectangle(170,410,10,100,{
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
    const sling2 = Bodies.rectangle(142,370,1,1,{
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
        xScale: 1.3,
        }
}
const vertBlock = {
    sprite: {
        texture: "img/column.png",
        xScale: 1,
        yScale: 1.2
        }
}
const vertBlock2 = {
    sprite: {
        texture: "img/column.png",
        xScale: 1.2,
        yScale: 1.2
        }
}
    const ballRender = {
        sprite:{
            texture: "img/stone.png",
            xScale: 0.8,
            yScale:0.8
        }
    }
   const ball1 = Bodies.circle(740,100,30,{
    render : ballRender
   }) 
   const ball2 = Bodies.circle(645,220,30,{
    render : ballRender
   }) 
   const ball3 = Bodies.circle(740,340,30,{
    render : ballRender
   }) 
   const block1 = Bodies.rectangle(780,490,20,100,{
        render: vertBlock
   })
   const block2 = Bodies.rectangle(600,490,20,100,{
        render : vertBlock
   })
   const block3 = Bodies.rectangle(635,380,110,20,{
        render : gorizBlock

   })
   const block6 = Bodies.rectangle(745,380,110,20,{
        render : gorizBlock
   })
   const block4 = Bodies.rectangle(690,490,30,100,{
        render : vertBlock2
   })
   const block5 = Bodies.rectangle(690,320,30,100,{
        render :vertBlock2
   })
   
   const block7 = Bodies.rectangle(780,320,20,100,{
        render : vertBlock
   })
   const block8 = Bodies.rectangle(600,320,20,100,{
        render : vertBlock
   })
   const block10 = Bodies.rectangle(635,260,110,20,{
          render : gorizBlock

   })
   const block11 = Bodies.rectangle(745,260,110,20,{
            render : gorizBlock
   })
   const block12 = Bodies.rectangle(690,200,30,100,{
         render :vertBlock2
    })
    
    const block13 = Bodies.rectangle(780,200,20,100,{
            render : vertBlock
    })
    const block14 = Bodies.rectangle(600,200,20,100,{
        render : vertBlock
    })
    const block15 = Bodies.rectangle(635,140,110,20,{
        render : gorizBlock
    
       })
    const block16 = Bodies.rectangle(745,140,110,20,{
            render : gorizBlock
    })
    const block17 = Bodies.rectangle(690,80,20,100,{
        render :vertBlock
    })
        
    const block18 = Bodies.rectangle(780,80,20,100,{
         render : vertBlock
    })
    const block19 = Bodies.rectangle(600,80,20,100,{
         render : vertBlock
    })
    const block20 = Bodies.rectangle(635,20,110,20,{
        render : gorizBlock
    
    })
    const block21 = Bodies.rectangle(745,20,110,20,{
        render : gorizBlock
    })

   const block9 = Bodies.rectangle(640,250,110,20,{
    // render : {
    //     sprite: {
    //         texture: "img/beam.png",
    //         xScale: 1.4,
    //     }
    // } 
   })

   const pig1 = Bodies.circle(645,100,25,{ 
            density: 0.001 ,
            render: {
                sprite: {
                    texture: "img/pig.png",
                      xScale: 0.065,
                    yScale: 0.065,
                    
                    }
            }
        })
       
   const pig2 = Bodies.circle(740,220,25,{ 
            density: 0.001 ,
            render: {
                sprite: {
                    texture: "img/pig.png",
                      xScale: 0.065,
                    yScale: 0.065,
                    
                    }
            }
        })
    const pig3 = Bodies.circle(645,340,25,{ 
        density: 0.001 ,
        render: {
            sprite: {
                texture: "img/pig.png",
                    xScale: 0.065,
                yScale: 0.065,
                
                }
        }
    })
    
        pig1.pig = 'pig1';
        pig2.pig = 'pig2';
        pig3.pig = 'pig3';
        // анимированное удаление свиньи
    let counterPig = 3;
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
                    levelComplite(2)
                }
            }
             
        }

        tick()
    }   
   let  arr = [ground,sling1,block3,block1,block2,block4,block6,block10,block11,block12,block13,block14,
    block5, block7, block8, block15, block16,block17, block18, block19,block20, block21, rock, elastic,
    pig1,sling2,pig2,pig3,ball1,ball2,ball3];
    
    
   
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
            if (arr[i].pig === 'pig3' && (arr[i].positionImpulse.x> 0.1  || arr[i].positionImpulse.y> 0.1 )){
                arr[i].pig=''
                soundBoom2.play()
                deadPig(pig3)
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
            levelsArr[2]++
            if (counterFly-->0) {
                Composite.add(engine.world, rock);
                
            } else {
                setTimeout(()=>{
                    if (!document.querySelector('.level_complite')){
                        levelsArr[2]++
                    levelComplite(2)
                    
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


           