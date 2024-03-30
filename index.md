---
layout: home

hero:
  name: "开物杀"
  text: "Banglike，但是肉鸽合成"
  tagline: 在《三国杀》里玩《MineCraft》！搅拌合成工坊与策略卡牌。探索蛋白石与等三色堇等博物，在《天工开物》般的手工业世界中，你能灵活运用卡牌配方创造自己的流派，以四人团队为单位击败对手吗？整个游戏都是糕点与小动物的可爱像素风。
  image: 
    light: /首页资源/汐芊水印.png
    dark: /首页资源/汐芊水印夜间.png
    alt: 23333 
  actions:
    - theme: brand
      text: 一分钟入门
      link: /markdown-examples
    - theme: alt
      text: 当天死
      link: /api-examples

features:
  - title: 合成机制
    icon:
      src: /icon/flask-vial-solid.svg
    details: 简明的合成系统。不同的素材对应着鲜明的要素。为【杀】附魔火焰，为【闪】附魔反击；为锦囊牌「原型」诸注入资源，搓出10余种不同的进攻战略。不再靠天吃饭，按照你的计划去打造你要用的牌！
  - title: 版本管理
    icon: 
      src: /icon/code-branch-solid.svg
    details: 官方盲目投放新武将，致使历史问题黄河淤沙。汐芊体系会始终全局监控，做到架构明晰、将池干净可管理。此外还会保留每个版本，详细说明每次迭代的改动。使玩家与设计师能够从任何一个节点立即出发。
  - title: 底牌
    icon: 
      src: /icon/eye-solid.svg
    details: 改变「速食」牌一统天下的局面，新增三种更具策略性的卡牌：「应机」牌在特定时刻大显身手，还能成为牌组运转的核心零件，「记忆」牌以丰厚的收益回报长线的培养，「永续」牌则
  - title: EX身份场
    icon:
      src: /icon/masks-theater-solid.svg
    details: 兼顾身份场的乐趣和阵营协调对抗的智慧，。

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

<VPTeamMembers size="small" :members="members" />