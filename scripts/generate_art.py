from PIL import Image,ImageDraw,ImageFilter
import math,random,os
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]/'site/assets/img'; ROOT.mkdir(parents=True,exist_ok=True)
W,H=1500,1000
random.seed(142)
palettes=[('#081b2d','#193c4c','#b38b55'),('#0b2633','#245563','#d4ad6a'),('#1b2a30','#5f6d62','#d8b47b'),('#0c1c29','#426378','#cea477'),('#1a2b2e','#56756d','#baa27e'),('#131f2b','#45616c','#d3ac70'),('#101e2a','#6d776c','#c4a072'),('#132834','#40606a','#d7b78e'),('#10192c','#23536b','#89adc1'),('#0c2130','#44626b','#cfa06c'),('#201e1e','#725a50','#d4b18b'),('#182c38','#4c6978','#dab37f')]
names=['hero-douala-concept','group-strategy','exchange-market','property-architecture','construction-infrastructure','sugar-manufacturing','import-assembly-trade','finance-accounting','people-operations','digital-intelligence','approach-materials','careers-culture']
def hexrgb(s):return tuple(bytes.fromhex(s[1:]))
for k,name in enumerate(names):
 p=palettes[k]; c0,c1,acc=map(hexrgb,p)
 im=Image.new('RGB',(W,H));pix=im.load();rr=random.Random(k*239+3)
 for y in range(H):
  for x in range(W):
   tx=(x/W)*.24+y/H*.75
   v=math.sin(x/W*6+y/H*1.3)*.023+rr.random()*.035
   t=max(0,min(1,tx+v))
   pix[x,y]=tuple(int(a*(1-t)+b*t) for a,b in zip(c0,c1))
 d=ImageDraw.Draw(im,'RGBA')
 # Fine diagonal grid and warm technical details
 for x in range(-1000,2500,110): d.line([(x,0),(x+850,1000)],fill=(*acc,18),width=2)
 for x in range(75,W,105):d.line([(x,0),(x,H)],fill=(232,220,192,13),width=1)
 for y in range(95,H,105):d.line([(0,y),(W,y)],fill=(232,220,192,13),width=1)
 if k in (0,1,3,4,10):
  # Graduated contemporary building complex with dramatic light edges
  for j in range(11):
   bx=220+j*111+rr.randint(-15,15);by=925;bw=rr.randint(90,175);bh=rr.randint(275,700)
   if k==3: bh=round(400+200*math.sin(j*.4));bw=130
   col=(5+rr.randint(3,15),24+rr.randint(3,20),34+rr.randint(3,24),245)
   d.polygon([(bx,by),(bx+bw,by-45),(bx+bw,by-bh-45),(bx,by-bh)],fill=col)
   d.line([(bx,by-bh),(bx+bw,by-bh-45)],fill=(*acc,190),width=4)
   d.line([(bx+bw,by-bh-45),(bx+bw,by-45)],fill=(212,218,208,110),width=2)
   for xx in range(bx+16,bx+bw-14,21):
    for yy in range(by-bh+28,by-20,36):
     if rr.random()>.33: d.rectangle([xx,yy,xx+7,yy+14],fill=(198,190,168,rr.randint(50,185)))
 elif k==2:
  for j in range(14):
   r=165+j*21;ox=1050+(j%3)*8;oy=540
   d.ellipse((ox-r,oy-r*.64,ox+r,oy+r*.64),outline=(*acc,int(150-j*7)),width=3)
  for i in range(32):
   x=100+i*44;y=700-math.sin(i*.19)*110-i*7+rr.randint(-45,45)
   d.ellipse((x-5,y-5,x+5,y+5),fill=(*acc,230))
   if i:d.line((prev,(x,y)),fill=(217,181,116,170),width=5)
   prev=(x,y)
  for j in range(15):d.line((850+j*15,80,380+j*15,950),fill=(215,176,112,16),width=3)
 elif k==5:
  # factory silhouettes: production hall, chimneys, pipes and radial industrial light
  for j in range(6):
   x=90+j*245;h=rr.randint(310,610)
   d.rectangle((x,900-h,x+175,900),fill=(11,29,39,238))
   d.polygon([(x,900-h),(x+87,900-h-75),(x+175,900-h)],fill=(24,50,57,245))
   for xx in range(x+18,x+164,38):
    for yy in range(900-h+45,890,55):d.rectangle((xx,yy,xx+16,yy+22),fill=(*acc,rr.randint(90,190)))
   d.rectangle((x+150,900-h-160,x+174,900-h),fill=(20,44,52,220))
  for y in range(690,900,40):d.line((0,y,1500,y),fill=(*acc,45),width=5)
 elif k==6:
  # Logistics containers, lines, port cranes
  for j in range(4):
   yy=825-j*116
   for n in range(5):
    x=rr.randint(8,30)+n*302+(j%2)*80
    col=[(29,64,70),(69,82,83),(120,88,67),(18,51,65)][(n+j)%4]
    d.rectangle((x,yy-107,x+290,yy),fill=(*col,245),outline=(*acc,120),width=2)
    for lin in range(x+12,x+280,18):d.line((lin,yy-102,lin,yy-5),fill=(212,200,165,40),width=2)
  for px in [310,960]:
   d.line((px,230,px,920),fill=(*acc,180),width=11)
   d.line((px-230,245,px+300,245),fill=(*acc,210),width=12)
   d.line((px+220,245,px+220,575),fill=(*acc,120),width=3)
 elif k==7:
  # Architectural ledger / financial column composition
  for j in range(22):
   x=160+j*56; y=805-rr.randint(30,650)
   d.rounded_rectangle((x,y,x+28,855),radius=3,fill=(*acc,rr.randint(85,200)))
   d.line((x,y,x+28,y),fill=(249,220,165,215),width=3)
  for j in range(10):d.arc((350-j*20,100-j*20,1150+j*20,900+j*20),215,325,fill=(250,226,188,45),width=3)
 elif k==8:
  # Scaled human forms seen from behind, editorial abstract
  for j in range(8):
   x=120+j*175;cy=360+rr.randint(-55,55);r=50+rr.randint(5,25)
   d.ellipse((x-r,cy-r,x+r,cy+r),fill=(*acc,round(130+rr.random()*75)))
   d.rounded_rectangle((x-r*1.23,cy+r+20,x+r*1.23,930),radius=50,fill=(29+12*j,57+3*j,63+2*j,255))
   d.line((x-r,cy+r+35,x+r,cy+r+35),fill=(245,230,205,45),width=3)
 elif k==9:
  # digital interface cluster layered with concentric grid
  for i in range(5):
   r=145+i*95;d.ellipse((775-r,520-r,775+r,520+r),outline=(*acc,90-i*15),width=3)
  for i in range(90):
   x=rr.randint(50,1450);y=rr.randint(90,910);rad=rr.choice([2,3,5,7])
   d.ellipse((x-rad,y-rad,x+rad,y+rad),fill=(*acc,rr.randint(80,210)))
   if rr.random()>.56:d.line((x,y,775,520),fill=(*acc,22),width=1)
 elif k==11:
  # Workplace layers, large sunlight geometry
  d.polygon(((0,110),(900,0),(1200,1000),(200,1000)),fill=(225,185,119,47))
  for j in range(8):
   x=80+j*185
   d.polygon(((x,740),(x+125,700),(x+125,1040),(x,1040)),fill=(5,20,29,240))
   d.ellipse((x+5,570,x+90,695),fill=(*acc,145))
 d.line((85,95,440,95),fill=(*acc,210),width=4)
 d.line((85,96,85,320),fill=(*acc,130),width=3)
 for j in range(8):
  a=93+j*39;d.line((a,960,a+17,960),fill=(*acc,130),width=2)
 d.ellipse((1090,-210,1860,560),outline=(*acc,50),width=3)
 im=im.filter(ImageFilter.GaussianBlur(.45))
 # Add film-like grain
 noise=Image.effect_noise((W,H),17).convert('L');noise.putalpha(34);color=Image.new('RGBA',(W,H),(218,204,177,0));color.putalpha(noise.getchannel('A'));im=Image.alpha_composite(im.convert('RGBA'),color).convert('RGB')
 im.save(ROOT/(name+'.webp'),'WEBP',quality=84,method=6)
 print(name,round((ROOT/(name+'.webp')).stat().st_size/1024),'KB')
