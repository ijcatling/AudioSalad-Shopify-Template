AudioSalad-Shopify-Template
===========================

Default template for an AudioSalad release.

###Assets

The CSS and JS assets files can be included in the theme.liquid, or pasted into theme's main CSS and JS files.

When including in the theme, the CSS must be included before the main CSS file.

```ruby
  <!-- Require AudioSalad CSS before main stylesheet -->
  {% if template contains 'audiosalad' %}
    {{ 'audiosalad.css' | asset_url | stylesheet_tag }}
  {% endif %}
```

The AudioSalad JS must be included AFTER jQuery.

```ruby
  <!-- Require AudioSalad JS after jQuery -->
  {% if template contains 'audiosalad' %}
    {{ 'audiosalad.js' | asset_url | script_tag }}
  {% endif %}
```

