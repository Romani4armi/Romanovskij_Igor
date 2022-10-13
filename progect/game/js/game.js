var Example = Example || {};
    let s = false; //проверка на создание уровня 
    levelCounter = 1
Example.slingshot0 = function() {
    levelsArr[0]=0
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
            background: 'img/background_1.png',
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
        y: 350
    }
    // add bodies
    let ground = Bodies.rectangle(450, 645, 900, 350, { isStatic: true, render: { 
            sprite :{
                 texture: 'img/image.png',
                 xScale: 0.7,
                yScale: 0.7,
              
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
     
    const sling1 = Bodies.rectangle(170,390,10,100,{
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
    const sling2 = Bodies.rectangle(142,350,1,1,{
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
        xScale: 1.4,
        }
}
const vertBlock = {
    sprite: {
        texture: "img/column.png",
        xScale: 1,
        yScale: 1.2
        }
}
   const block1 = Bodies.rectangle(600,400,20,100,{
    render : vertBlock
   })
   const block2 = Bodies.rectangle(680,400,20,100,{
    render : vertBlock
   })
   const block3 = Bodies.rectangle(640,350,110,20,{
    render : gorizBlock
   })
   const block4 = Bodies.rectangle(600,300,20,100,{
    render : vertBlock
   })
   const block5 = Bodies.rectangle(680,300,20,100,{
    render :vertBlock
   })
   const block6 = Bodies.rectangle(640,250,110,20,{
    render : gorizBlock
   })
   const block7 = Bodies.rectangle(600,180,20,100,{
    render : vertBlock
   })
   const block8 = Bodies.rectangle(680,180,20,100,{
    render : vertBlock
   })
   const block9 = Bodies.rectangle(640,130,110,20,{
    render : gorizBlock
   })

   const pig1 = Bodies.circle(640,320,25,{ 
            density: 0.001 ,
            render: {
                sprite: {
                    texture: "img/pig.png",
                      xScale: 0.07,
                    yScale: 0.07,
                    
                    }
            }
        })
       
   const pig2 = Bodies.circle(640,220,25,{ 
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
                    levelComplite(0)
                }
            }
             
        }

        tick()
    }   
   let  arr = [ground, block1,block2,block3,block4,block5,block6,pig1,pig2,sling1, rock, elastic,sling2];
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
            levelsArr[0]++
            if (counterFly-->0) {
                Composite.add(engine.world, rock);
                
            } else {
                setTimeout(()=>{
                    if (!document.querySelector('.level_complite')){
                        levelsArr[0]++
                    levelComplite(0)
                    
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


           