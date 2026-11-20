---
title: Contatti
permalink: /contatti/
---
<div class="contatti">
  <p><strong>Email</strong><br><a href="mailto:{{ site.data.sito.email }}">{{ site.data.sito.email }}</a></p>
  <p><strong>Telefono</strong><br>{{ site.data.sito.telefono }}<br><span class="piccolo">{{ site.data.sito.orari_telefono }}</span></p>
  <p><strong>Posta</strong><br>{{ site.data.sito.nome }}<br>{{ site.data.sito.indirizzo }}</p>
  {% if site.data.sito.facebook != "" %}<p><strong>Facebook</strong><br><a href="{{ site.data.sito.facebook }}" rel="noopener">facebook.com/storicomnibus</a></p>{% endif %}
</div>

## Siti amici

<ul>
{% for s in site.data.sito.siti_amici %}  <li><a href="{{ s.url }}" rel="noopener">{{ s.nome }}</a></li>
{% endfor %}</ul>
