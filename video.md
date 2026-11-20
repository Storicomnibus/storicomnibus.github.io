---
title: Video
permalink: /video/
---
Questo video ironico e celebrativo è stato realizzato nel 2008 per raccontare la cronostoria delle circa 800 ore di lavoro volontario dedicate al restauro del Fiat 418 AC Minerva.

{% assign v = site.data.sito.video_youtube %}
{% if v != "" %}
  {% assign id = v | split: "v=" | last | split: "&" | first | split: "youtu.be/" | last %}
  <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/{{ id }}" title="Video StoricOmnibus" allowfullscreen loading="lazy"></iframe></div>
{% else %}
  <p class="avviso">Il video sarà disponibile a breve.</p>
{% endif %}
