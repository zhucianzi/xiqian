---
layout: home

hero:
  name: "汐芊体系"
  text: "更好的《三国杀》"
  tagline: 合成玩法与底牌，使手牌得到应有的管理与运营
  image: 
    light: /首页资源/汐芊水印.png
    dark: /首页资源/汐芊水印夜间.png
    alt: 23333 
  actions:
    - theme: brand
      text: 这个不能点
      link: /markdown-examples
    - theme: alt
      text: 这个也是
      link: /api-examples

features:
  - title: 版本管理
    icon: 
      src: /icon/code-branch-solid.svg
    details: 官方盲目投放新武将，致使历史问题黄河淤沙。汐芊体系会始终全局监控，做到架构明晰、将池干净可管理。此外还会保留每个版本，详细说明每次迭代的改动。使玩家与设计师能够从任何一个节点立即出发。
  - title: 底牌
    icon: 
      src: /icon/eye-solid.svg
    details: ！通过「记忆」「应机」打厚牌堆，改变速食牌一统天下的局面。
  - title: 理事区
    icon:
      src: /icon/desktop-solid.svg
    details: 判定区的全面升级！支持任何性质的延时牌：BUFF性的「永续」锦囊牌；一段时间后的「延迟」锦囊牌；技能需要暂存的牌。分“内”“外”两个子区域，各两栏。保证个人发挥与可交互性。
  - title: 合成机制
    icon:
      src: /icon/flask-vial-solid.svg
    details: 在三国杀里玩MineCraft！使用素材牌，为【杀】附魔火焰，为【闪】附魔反击；为锦囊牌「原型」诸注入资源，搓出10余种不同的进攻战略。不再靠天吃饭，按照你的计划去打造你要用的牌！
  - title: 兵势
    icon:
      src: /icon/gun-solid.svg
    details: 原版的出【杀】限制已经老化了，它既无法约束锦囊这一主要伤害来源、又让许多没有直伤的对局极度拖沓。汐芊体系将出杀次数升级为「兵势」，每个出牌阶段总共可以使用两张伤害牌。当然，也会有那样一次用尽兵势的重型武器。
  - title: 仓储区
    icon:
      src: /icon/get-pocket.svg
    details: 第四区域。每个人都有一个可供存放牌的小小口袋，默认4容量。只有手牌存量过硬，才能展开丰富多彩的合成与博弈。不过，存取、调用其中的牌不是免费的，它和合成一样，会消耗另外一种资源：民力。
  - title: EX身份场
    icon:
      src: /icon/masks-theater-solid.svg
    details: 前两轮作为「序幕」，角色将次第亮明身份。启幕时，主公方可以凑集一笔不菲的资源笼络内奸，而反贼议定他们的未来：穷凶极恶、拥立新主、还是一条无人走过的道路...在伤亡与轮数都迈过门槛后，游戏进入改良的鏖战。
  - title: 很可爱的开发者
    icon:
      src: /icon/heart-solid.svg
    details: 真的很可爱！
---

<script setup>
  import { VPTeamMembers } from "vitepress/theme";

  const members = [
    {
      avatar: "https://cravatar.cn/avatar/ECB2EA87C4532F007838D86D02798F89",
      name: "山吹色御守",
      title: "幼驯染，哆啦A梦，网站的99%的贡献者",
    },
    {
      avatar: "/头像/汐.jpg",
      name: "汐",
      title: "亲密的合作队友，底牌论的作者，理论基石",
    },
    {
      avatar: "/头像/全体嘭友.jpg",
      name: "全体嘭友",
      title: "嘭！",
    },
  ];
</script>

<br /> 
<br /> 
<br /> 
<br /> 

<VPTeamMembers size="small" :members="members" />